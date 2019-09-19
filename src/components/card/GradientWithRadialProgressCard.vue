<template lang="pug">
b-card.progress-banner( no-body )
  b-card-body.justify-content-between.d-flex.flex-row.align-items-center
    div
      i.mr-2.text-white.align-text-bottom.d-inline-block(:class="icon")
      div
        p.lead.text-white {{ title }}
        p.text-small.text-white {{ detail }}
    .progress-bar-circle.progress-bar-banner.position-relative
      radial-progress-bar(:diameter="diameter" :strokeWidth="strokeWidth" :completed-steps="percent" :total-steps="100") {{ progressText }}

</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import RadialProgressBar from "vue-radial-progress/src/RadialProgressBar.vue";

@Component({
  name: "GradientWithRadialProgressCard",
  components: {
    RadialProgressBar
  }
})
export default class GradientWithRadialProgressCard extends Vue {
  @Prop() public icon: string;

  @Prop() public title: string;

  @Prop() public detail: string;

  @Prop() public progressText: string;

  @Prop() public percent: string;

  public diameterDefault = 125;
  public strokeWidthDefault = 5;
  public diameter = this.diameterDefault;
  public strokeWidth = this.strokeWidthDefault;

  public mounted(): void {
    window.addEventListener("resize", this.handleWindowResize);
    this.handleWindowResize();
  }

  public handleWindowResize(event?: any): void {
    if (event && !event.isTrusted) {
      return;
    }
    const windowWidth = window.innerWidth;
    if (windowWidth <= 1200) {
      this.diameter = 84;
      this.strokeWidth = 2;
    } else {
      this.diameter = this.diameterDefault;
      this.strokeWidth = this.strokeWidthDefault;
    }
  }
}
</script>
