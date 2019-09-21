<template lang="pug">
.sidebar(@mouseenter="isMenuOver=true" @mouseleave="isMenuOver=false"  @touchstart="isMenuOver=true")
  .main-menu
    vue-perfect-scrollbar.scroll(:settings="{ suppressScrollX: true, wheelPropagation: false }")
      ul.list-unstyled
        li(:class="{ active: selectedParentMenu === 'dashboards'}")
          a( href="#dashboards")
            i.iconsminds-shop-4 dashboard
        li(:class="{ active: selectedParentMenu === 'pages'}")
          a( href="#pages")
            i.iconsminds-shop-4 pages
        li(:class="{ active: selectedParentMenu === 'applications'}")
          a( href="#applications" )
            i.iconsminds-shop-4 applications
        li(:class="{ active: selectedParentMenu === 'ui'}")
          a( href="#ui")
            i.iconsminds-shop-4 ui
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import vuePerfectScrollbar from "vue-perfect-scrollbar/index.vue";

@Component({
	name: "SideBar",
	components: {
		vuePerfectScrollbar
	}
})
export default class SideBar extends Vue {
	public selectedParentMenu = "";
	public isMenuOver = false;
}
</script>

<style scoped>

</style>
