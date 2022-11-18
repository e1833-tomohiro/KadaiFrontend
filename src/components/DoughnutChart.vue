<template>
  <div>
    <Doughnut :chart-data="chartData" :chart-option="chartOptions"></Doughnut>
  </div>
</template>

<script>
import { defineComponent, h, } from 'vue'

import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
)

var doughnuchart = defineComponent({
  name: 'DoughnutChart',
  components: {
    Doughnut
  },
  data: function(){

  },
  props: {
    chartId: {
      type: String,
      default: 'doughnut-chart'
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    cssClasses: {
      default: '',
      type: String
    },
    chartData: {
      default: null,
      type: Object,
    },
    chartOptions: {
      defualt: null,
      type: Object
    },
    plugins: {
      default: () =>[]
    },
    
  },
  setup(props) {
    return () =>
      h(Doughnut, {
        chartData: props.chartData,
        chartOptions: props.chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        plugins: props.plugins
      })
  }
})

export default doughnuchart

</script>