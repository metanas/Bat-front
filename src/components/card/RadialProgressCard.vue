<template lang="pug">
b-card(no-body)
  b-card-header.p-0.position-relative(v-if="noSuffle!==false")
    .position-absolute.handle.card-icon
      i.simple-icon-shuffle
  b-card-body.d-flex.justify-content-between.align-items-center
    h5.mb-0.card-title {{ title }}
    .progress-bar-circle
      radial-progress-bar(:diameter="54" :strokeWidth="2" :completed-steps="percent" :total-steps="100") {{percent}}
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import RadialProgressBar from "vue-radial-progress/src/RadialProgressBar.vue";

@Component({
	name: "RadialProgressCard",
	components: {
		RadialProgressBar
	}
})
export default class RadialProgressCard extends Vue {
	@Prop() public title: string;

	@Prop() public percent: number;

	@Prop() public noSuffle: boolean;
}
</script>

<style scoped>

</style>
