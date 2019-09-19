<template lang="pug">
#app-container
  top-nav
  side-bar
  gradient-with-radial-progress-card(detail="test" icon="test" progress-text="tetx" title="test")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TopNav from "@/containers/TopNav.vue";
import SideBar from "@/containers/SideBar.vue";
import GradientWithRadialProgressCard from "@/components/card/GradientWithRadialProgressCard.vue";
@Component({
  name: "Admin",
  components: { TopNav, SideBar, GradientWithRadialProgressCard }
})
export default class Admin extends Vue {

}
</script>

<style scoped>

</style>
