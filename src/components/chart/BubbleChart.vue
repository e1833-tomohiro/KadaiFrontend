<template>
    <b-container>
        <Bubble></Bubble>
    </b-container>
</template>

<script>
import { defineComponent, h, } from 'vue'
import annotationPlugin from 'chartjs-plugin-annotation'

import { Bubble } from 'vue-chartjs'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, PointElement, LinearScale, annotationPlugin)

export default defineComponent({

  name: 'BubbleChart',
  components: {
    Bubble
  },
  data: function(){
    return {
    }
  },
  props: {
    chartId: {
      type: String,
      default: 'bubble-chart'
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    },
    chartData: {
      default: null,
      type: Object,
    },
    chartOptions: {
      defualt: null,
      type: Object
    },
  },
  methods: {
  },
  setup(props) {
    let styles = {
        "height": "600px",
        "width": "800px",
    }
    if(window.screen.width>=1440){
        styles.height = "720px";
        styles.width = "960px";
    }

    return () =>
      h(Bubble, {
        chartData: props.chartData,
        chartOptions: props.chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: styles,
        plugins: props.plugins
      })
  }
})
</script>
<style>
  #bubble-chart {
      background-image: url('../../../public/static/img/map.png');
      background-size: cover;
    }
</style>