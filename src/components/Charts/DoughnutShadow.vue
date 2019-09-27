<script lang="ts">
import Chart from "chart.js";
import { generateChart } from "vue-chartjs";
import { centerTextPlugin } from "@/utils";
import {Component, Prop, Vue} from "vue-property-decorator";
import { doughnutChartOptions } from "./config";

Chart.defaults.doughnutWithShadow = Chart.defaults.doughnut;
Chart.controllers.doughnutWithShadow = Chart.controllers.doughnut.extend({
	draw(ease) {
		Chart.controllers.doughnut.prototype.draw.call(this, ease);
		const ctx = this.chart.chart.ctx;
		ctx.save();
		ctx.shadowColor = "rgba(0,0,0,0.15)";
		ctx.shadowBlur = 10;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 10;
		ctx.responsive = true;
		Chart.controllers.doughnut.prototype.draw.apply(this, arguments);
		ctx.restore();
	}
});
@Component({
	name: "DoughnutShadowClass"
})
const DoughnutShadow = generateChart("doughnut-with-shadow", "doughnutWithShadow");
export default class DoughnutShadowClass extends DoughnutShadow {
	@Prop() public data: object;
	public  options = doughnutChartOptions;
	public mounted(): void {
		this.addPlugin(centerTextPlugin);
		this.renderChart(this.data, this.options);
	}
}
</script>
