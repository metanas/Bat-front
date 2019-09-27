<script lang="ts">
import Chart from "chart.js";
import { generateChart } from "vue-chartjs";
import {Component, Prop, Vue} from "vue-property-decorator";
import { barChartOptions } from "./config";
Chart.defaults.barWithShadow = Chart.defaults.bar;
Chart.controllers.barWithShadow = Chart.controllers.bar.extend({
	draw(ease) {
		Chart.controllers.bar.prototype.draw.call(this, ease);
		const ctx = this.chart.ctx;
		ctx.save();
		ctx.shadowColor = "rgba(0,0,0,0.2)";
		ctx.shadowBlur = 7;
		ctx.shadowOffsetX = 5;
		ctx.shadowOffsetY = 7;
		ctx.responsive = true;
		Chart.controllers.bar.prototype.draw.apply(this, arguments);
		ctx.restore();
	}
});
const BarShadow = generateChart("bar-with-shadow", "barWithShadow");
@Component({
	name: "BarShadowClass"
})
export default class BarShadowClass extends BarShadow {
	@Prop() public data: object;

	public  options = barChartOptions;
	public mounted(): void {
		this.renderChart(this.data, this.options);
	}
}
</script>
