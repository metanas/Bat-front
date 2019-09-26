
<script lang="ts">
import Chart from "chart.js";
import { generateChart } from "vue-chartjs";
import {Component, Prop, Vue} from "vue-property-decorator";
import { pieChartOptions } from "./config";

Chart.defaults.pieWithShadow = Chart.defaults.pie;
Chart.controllers.pieWithShadow = Chart.controllers.pie.extend({
	draw(ease) {
		Chart.controllers.pie.prototype.draw.call(this, ease);
		const ctx = this.chart.chart.ctx;
		ctx.save();
		ctx.shadowColor = "rgba(0,0,0,0.15)";
		ctx.shadowBlur = 10;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 10;
		ctx.responsive = true;
		Chart.controllers.pie.prototype.draw.apply(this, arguments);
		ctx.restore();
	}
});
const PieShadow = generateChart("pie-with-shadow", "pieWithShadow");
@Component({
	name: "PieShadowClass"
})
export default class PieShadowClass extends PieShadow {
	@Prop() public data: object;

	public  options = pieChartOptions;
	public mounted(): void {
		this.renderChart(this.data, this.options);
	}
}
</script>
