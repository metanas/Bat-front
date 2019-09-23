<script lang="ts">
import { Bar } from 'vue-chartjs'
import { barChartOptions } from './config'
import {Component, Prop} from "vue-property-decorator";
@Component({
    name:"BarClass"
})
export default class BarClass extends Bar  {
    @Prop() public data: object;
    public  options = barChartOptions ;
    public mounted(): void {
        this.renderChart(this.data, this.options)
    }
}
</script>
