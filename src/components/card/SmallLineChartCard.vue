<template lang="pug">
b-card(no-body)
  b-card-body
    p.lead.color-theme-1.mb-1.value {{labelPrefix}}{{labely}}
    p.mb-0.label.text-small {{labelx}}
    .chart
      small-line-chart(:data="data" height="60" @on-chart-mouse-over="onChartMouseOver")
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import SmallLineChart from "@/components/Charts/SmallLine";

@Component({
	name: "SmallLineChartCard",
	components: { SmallLineChart }
})
export default class SmallLineChartCard extends Vue {
	@Prop() public labelPrefix: string;

	@Prop() public data: [];

	public labelx = "";

	public labely = "";

	public onChartMouseOver({ labelx, labely }: any) {
		this.labelx = labelx;
		this.labely = labely;
	}
}
</script>

<style scoped>

</style>
