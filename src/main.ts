import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "@/assets/css/vendor/bootstrap.min.css";
import "@/assets/css/vendor/bootstrap.rtl.only.min.css";
import "@/assets/css/vendor/dropzone.min.css";
import "@/assets/css/scss/theme/piaf.light.blue.scss";
import VueApollo from "vue-apollo";
import {ApolloClient} from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import {ApolloLink} from "apollo-link";


const httpLink = new HttpLink({
  uri: "http://localhost:4000/api/admin/graphql"
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("admin_token");

  operation.setContext({
	  headers: {
		  authorization: token ? `Bearer ${token}` : ""
	  }
  });
  return forward(operation);
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  connectToDevTools: true
});

Vue.use(VueApollo);

Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
	  $loadingKey: "loading"
  }
});

Vue.use(BootstrapVue);

new Vue({
	router,
	store,
  apolloProvider,
	render: (h) => h(App),
}).$mount("#app");
