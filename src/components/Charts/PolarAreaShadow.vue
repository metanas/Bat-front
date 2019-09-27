
<script lang="ts">
import Chart from "chart.js";
import { generateChart } from "vue-chartjs";
import {Component, Prop, Vue} from "vue-property-decorator";
import { polarAreaChartOptions } from "./config";

Chart.defaults.polarWithShadow = Chart.defaults.polarArea;
Chart.controllers.polarWithShadow = Chart.controllers.polarArea.extend({
	draw(ease) {
		Chart.controllers.radar.prototype.draw.call(this, ease);
		const ctx = this.chart.chart.ctx;
		ctx.save();
		ctx.shadowColor = "rgba(0,0,0,0.2)";
		ctx.shadowBlur = 7;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 7;
		ctx.responsive = true;
		Chart.controllers.radar.prototype.draw.apply(this, arguments);
		ctx.restore();
	}
});

const PolarAreaShadow = generateChart("polar-with-shadow", "polarWithShadow");
@Component({
	name: "PolarAreaShadowClass"
})
export default class PolarAreaShadowClass extends PolarAreaShadow {
	@Prop() public data: object;

	public  options = polarAreaChartOptions;
	public mounted(): void {
		this.renderChart(this.data, this.options);
	}
}
</script>

