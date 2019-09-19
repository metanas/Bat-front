<template lang="pug">
  svg( xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 17")
    rect( x="0.5" y="0.5" width="25" height="1" )
    rect( x="0.5" y="7.5" width="25" height="1" )
    rect( x="0.5" y="15.5" width="25" height="1")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "MenuIconMobile"
})
export default class MenuIconMobile extends Vue {}
</script>

<style scoped>

</style>
