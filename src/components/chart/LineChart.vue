<template>
  <div>
    <Line></Line>
  </div>
</template>

<script>
// DataPage.vue
import { defineComponent, h, } from 'vue'

import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Filler
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Filler
)

export default defineComponent({
  name: 'LineChart',
  components: {
    Line
  },
  props: {
    chartId: {
      type: String,
      default: 'line-chart'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    chartData: {
      default: null,
      type: Object
    },
    chartOptions: {
      default: null,
      type: Object,
    }
  },
  setup(props) {
    //var { chartData, chartOptions } = ref(props);
    //console.log(chartData, chartOptions);
    const chartOptions =  {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                suggestedMin: 0,
            }
        }

      }
    return () =>

      h(Line, {
        chartData: props.chartData,
        chartOptions: chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins
      })
  }
})


</script>
