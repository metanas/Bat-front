<script lang="ts">
import { Doughnut } from 'vue-chartjs'
import { doughnutChartOptions } from './config'
import { centerTextPlugin } from '@/utils'
import {Component, Prop, Vue} from "vue-property-decorator";
@Component({
    name:"DoughnatClass"
})
export default class DoughnatClass extends Doughnut {
    @Prop() public data: object;

    public  options = doughnutChartOptions;
    public mounted(): void {
        this.addPlugin(centerTextPlugin)
        this.renderChart(this.data, this.options)
    }

}
</script>
