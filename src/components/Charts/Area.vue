<script lang="ts">
import { Line } from "vue-chartjs";
import {Component, Prop, Vue} from "vue-property-decorator";
import { areaChartOptions } from "./config";

@Component({
	name: "Area"
})

export default class Area extends Line {
	@Prop() public data: object;
	public  options = areaChartOptions;
	public mounted(): void {
		this.renderChart(this.data, this.options);
	}
}
</script>

