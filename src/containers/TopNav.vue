<template lang="pug">
nav.navbar.fixed-top
  .d-flex.align-items-center.navbar-left
    a.menu-button.d-none.d-md-block(href="#" )
      menu-icon
    a.menu-button-mobile.d-xs-block.d-sm-block.d-md-none(href="#")
      menu-icon-mobile
    .search(:class="{ 'mobile-view': isMobileSearch }")
      b-input(placeholder="search" v-model="searchKeyword")
      span.search-icon
        i.simple-icon-magnifier
    router-link.navbar-logo(tag="a" to="/app")
      span.logo.d-none.d-xs-block
      span.logo-mobile.d-block.d-xs-none
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuIcon from "@/components/Svg/MenuIcon.vue";
import MenuIconMobile from "@/components/Svg/MenuIconMobile.vue";

@Component({
  name: "TopNav",
  components: { MenuIcon, MenuIconMobile }
})
export default class TopNav extends Vue {
  public searchKeyword = "";
  public isMobileSearch = false;

}
</script>

<style scoped>

</style>
