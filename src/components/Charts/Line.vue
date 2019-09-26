<script lang="ts">
import { Line } from "vue-chartjs";
import { lineChartOptions } from "./config";
import {Component, Prop, Vue} from "vue-property-decorator";
@Component({
	name: "LineClass"
})
export default class LineClass extends Line {
	@Prop() public data: object;

	public  options = lineChartOptions;
	public mounted(): void {
		this.renderChart(this.data, this.options);
	}
}
</script>
