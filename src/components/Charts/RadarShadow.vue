
<script lang="ts">
import Chart from 'chart.js'
import { generateChart } from 'vue-chartjs'
import {Component, Prop, Vue} from "vue-property-decorator";
import { radarChartOptions } from './config'

Chart.defaults.radarWithShadow = Chart.defaults.radar
Chart.controllers.radarWithShadow = Chart.controllers.radar.extend({
    draw: function (ease) {
        Chart.controllers.radar.prototype.draw.call(this, ease)
        let ctx = this.chart.chart.ctx
        ctx.save()
        ctx.shadowColor = 'rgba(0,0,0,0.2)'
        ctx.shadowBlur = 7
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 7
        ctx.responsive = true
        Chart.controllers.radar.prototype.draw.apply(this, arguments)
        ctx.restore()
    }
})

const RadarShadow = generateChart('radar-with-shadow', 'radarWithShadow')
@Component({
    name:"RadarShadowClass"
})


export default class RadarShadowClass extends RadarShadow {
    @Prop() public data: object;
    public  options = radarChartOptions;
    public mounted(): void {
        this.renderChart(this.data, this.options)
    }
}
</script>
