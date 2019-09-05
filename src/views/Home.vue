<template lang="pug">
.home
  img(alt="Vue logo" :src="logo")
  HelloWorld(msg="Welcome to Your Vue.js + TypeScript App")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import logo from "@/assets/logo.png";

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  public logo = logo;
}
</script>
