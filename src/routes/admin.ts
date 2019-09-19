import {RouteConfig} from "vue-router";
import dashboard from "@/views/Admin.vue";


const routes: RouteConfig[] = [
  {
    path: "/",
    component: dashboard,
  },
];

export default routes;
