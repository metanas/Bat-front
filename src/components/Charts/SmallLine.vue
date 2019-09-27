<script lang="ts">
import Chart from "chart.js";
import { generateChart } from "vue-chartjs";
import {Component, Prop, Vue} from "vue-property-decorator";
import { smallLineChartOptions } from "./config";
import { addCommas } from "@/utils";

Chart.defaults.lineWithLine = Chart.defaults.line;
Chart.controllers.lineWithLine = Chart.controllers.line.extend({
	draw(ease) {
		Chart.controllers.line.prototype.draw.call(this, ease);

		if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
			const activePoint = this.chart.tooltip._active[0];
			const ctx = this.chart.ctx;
			const x = activePoint.tooltipPosition().x;
			const topY = this.chart.scales["y-axis-0"].top;
			const bottomY = this.chart.scales["y-axis-0"].bottom;

			ctx.save();
			ctx.beginPath();
			ctx.moveTo(x, topY);
			ctx.lineTo(x, bottomY);
			ctx.lineWidth = 1;
			ctx.strokeStyle = "rgba(0,0,0,0.1)";
			ctx.stroke();
			ctx.restore();
		}
	}
});

const SmallLine = generateChart("small-line", "lineWithLine");
@Component({
	name: "SmallLineClass"
})
export default class SmallLineClass extends SmallLine {
	@Prop() public data: object;

	public  options = smallLineChartOptions;
	public mounted(): void {
		const $that = this;
		const tooltips = {
			intersect: false,
			enabled: false,
			custom(tooltipModel, data) {
				if (tooltipModel && tooltipModel.dataPoints) {
					const yLabel = tooltipModel.dataPoints[0].yLabel;
					const xLabel = tooltipModel.dataPoints[0].xLabel;
					const label = tooltipModel.body[0].lines[0].split(":")[0];
					$that.$emit("on-chart-mouse-over", { labelx: label + "-" + xLabel, labely: addCommas(yLabel) });
				}
			}
		};

		this.addPlugin({
			afterInit(chart, options) {
				const yLabel = chart.data.datasets[0].data[0];
				const xLabel = chart.data.labels[0];
				const label = chart.data.datasets[0].label;
				$that.$emit("on-chart-mouse-over", { labelx: label + "-" + xLabel, labely: addCommas(yLabel) });
			}
		});
		this.renderChart(this.data, Object.assign({ ...this.options }, { tooltips }));
	}
}
</script>

