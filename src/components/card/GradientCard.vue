<template lang="pug">
b-card.dashboard-sq-banner.justify-content-end(no-body)
  b-card-body.justify-content-end.d-flex.flex-column
    slot
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "GradientCard"
})
export default class GradientCard extends Vue {}
</script>
