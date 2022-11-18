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
  {
    id: "doughnutChart",
    afterDraw: function(chart) {
      var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
      var val = chart.data;
      console.log(chart);
      ctx.restore();
      var fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";

      var text = val+"%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();
    }
  }
)

export default defineComponent({
  name: 'DoughnutChart',
  components: {
    Doughnut
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
    }
    
  },
  setup(props) {
    /*
    const chartData = {
      labels: [
        
      ],
      datasets: [
        {
          data: [80, 100-80],
          backgroundColor: [
            "#FF6384",
            "#AAAAAA"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#AAAAAA"
          ],
          hoverBorderColor: [
            "#FF6384",
            "#ffffff"
          ]
        }
      ]
    };
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false
    };*/
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

</script>