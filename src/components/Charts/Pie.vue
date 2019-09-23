
<script lang="ts">
    import { Pie } from 'vue-chartjs'
    import { pieChartOptions } from './config'
    import {Component, Prop, Vue} from "vue-property-decorator";
    @Component({
        name:"PieClass"
    })
    export default class PieClass extends Pie  {
        @Prop() public data: object;
        public  options = pieChartOptions;
        public mounted(): void {
            this.renderChart(this.data, this.options)
        }
    }
</script>
