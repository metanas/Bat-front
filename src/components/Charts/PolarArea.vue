
<script lang="ts">
import { PolarArea } from 'vue-chartjs'
import {Component, Prop, Vue} from "vue-property-decorator";
import { polarAreaChartOptions } from './config'
@Component({
    name:"PolarAreaClass"
})
export default class PolarAreaClass extends PolarArea {
    @Prop() public data: object;

    public  options = polarAreaChartOptions;
    public mounted(): void {
        this.renderChart(this.data, this.options)
    }
}
</script>
