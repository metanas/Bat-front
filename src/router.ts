import Vue from "vue";
import Router from "vue-router";
import Route from "./routes/admin";

Vue.use(Router);

export default new Router({
	routes: Route,
	mode: "history",
});
