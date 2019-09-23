
<script lang="ts">
import { Radar } from 'vue-chartjs'
import { radarChartOptions } from './config'
import {Component, Prop, Vue} from "vue-property-decorator";
@Component({
    name:"RadarClass"
})
export default class RadarClass extends Radar {
    @Prop() public data: object;

    public  options = radarChartOptions;
    public mounted(): void {
        this.renderChart(this.data, this.options)
    }
}
</script>
