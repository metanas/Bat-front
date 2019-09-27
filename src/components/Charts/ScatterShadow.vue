
<script lang="ts">
import Chart from "chart.js";
import { generateChart } from "vue-chartjs";
import {Component, Prop, Vue} from "vue-property-decorator";
import { scatterChartOptions } from "./config";

Chart.defaults.scatterWithShadow = Chart.defaults.scatter;
Chart.controllers.scatterWithShadow = Chart.controllers.scatter.extend({
	draw(ease) {
		Chart.controllers.scatter.prototype.draw.call(this, ease);
		const ctx = this.chart.chart.ctx;
		ctx.save();
		ctx.shadowColor = "rgba(0,0,0,0.2)";
		ctx.shadowBlur = 7;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 7;
		ctx.responsive = true;
		Chart.controllers.scatter.prototype.draw.apply(this, arguments);
		ctx.restore();
	}
});

const ScatterShadow = generateChart("scatter-with-shadow", "scatterWithShadow");
@Component({
	name: "ScatterShadowClass"
})
export default class ScatterShadowClass extends ScatterShadow {
	@Prop() public data: object;

	public  options = scatterChartOptions;
	public mounted(): void {
		this.renderChart(this.data, this.options);
	}

}
</script>
