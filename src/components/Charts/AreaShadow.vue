<script lang="ts">
import Chart from "chart.js";
import { generateChart } from "vue-chartjs";
import { areaChartOptions } from "./config";
import {Component, Prop, Vue} from "vue-property-decorator";

Chart.defaults.lineWithShadow = Chart.defaults.line;
Chart.controllers.lineWithShadow = Chart.controllers.line.extend({
	draw(ease) {
		Chart.controllers.line.prototype.draw.call(this, ease);
		const ctx = this.chart.ctx;
		ctx.save();
		ctx.shadowColor = "rgba(0,0,0,0.15)";
		ctx.shadowBlur = 10;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 10;
		ctx.responsive = true;
		ctx.stroke();
		Chart.controllers.line.prototype.draw.apply(this, arguments);
		ctx.restore();
	}
});
const AreaShadow = generateChart("area-with-shadow", "lineWithShadow");

@Component({
	name: "AreaShadowClass"
})

export default class AreaShadowClass extends AreaShadow {
	@Prop() public data: object;

	public  options = areaChartOptions;
	public mounted(): void {
		this.renderChart(this.data, this.options);
	}

}
</script>
