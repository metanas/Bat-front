import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "@/assets/css/vendor/bootstrap.min.css";
import "@/assets/css/vendor/bootstrap.rtl.only.min.css";
import "@/assets/css/vendor/dropzone.min.css";
import "@/assets/css/scss/theme/piaf.light.blue.scss";



Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
