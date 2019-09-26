
<script lang="ts">
import { Scatter } from "vue-chartjs";
import { scatterChartOptions } from "./config";
import {Component, Prop, Vue} from "vue-property-decorator";
@Component({
	name: "ScatterClass"
})
export default class ScatterClass extends Scatter {
	@Prop() public data: object;

	public  options = scatterChartOptions;
	public mounted(): void {
		this.renderChart(this.data, this.options);
	}
}
</script>

