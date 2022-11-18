<template>
    <b-row>
        <b-col xl="4" lg="4" sm="12">
          <DoughnutChart :chartData="chartData1" :chartOptions="chartOptions" :plugins="plugins1"></DoughnutChart>
        </b-col>
        <b-col xl="4" lg="4" sm="12">
          <DoughnutChart :chartData="chartData2" :chartOptions="chartOptions" :plugins="plugins2"></DoughnutChart>
        </b-col>
        <b-col xl="4" lg="4" sm="12">
          <DoughnutChart :chartData="chartData3" :chartOptions="chartOptions" :plugins="plugins3"></DoughnutChart>
        </b-col>
    </b-row>
</template>
<script>
    import DoughnutChart from './DoughnutChart.vue'
    export default{
        components: {
            DoughnutChart
        },
        data: function(){
          return{
            chartData1: {
              labels: [],
              datasets: [
                {
                  data: [],
                  backgroundColor: [
                    "#007BFF", 
                    "#F0F7FF"
                  ],
                  hoverBackgroundColor: [
                    "#007BFF", 
                    "#F0F7FF"
                  ],
                  hoverBorderColor: [
                  "#007BFF", 
                    "#F0F7FF"
                  ]
                }
              ]
            },
            chartData2: {
              labels: [],
              datasets: [
                {
                  data: [],
                  backgroundColor: [
                  "#007BFF", 
                    "#F0F7FF"
                  ],
                  hoverBackgroundColor: [
                  "#007BFF", 
                    "#F0F7FF"
                  ],
                  hoverBorderColor: [
                  "#007BFF", 
                    "#F0F7FF"
                  ]
                }
              ]
            },
            chartData3: {
              labels: [],
              datasets: [
                {
                  data: [],
                  backgroundColor: [
                  "#007BFF", 
                    "#F0F7FF"
                  ],
                  hoverBackgroundColor: [
                  "#007BFF", 
                    "#F0F7FF"
                  ],
                  hoverBorderColor: [
                  "#007BFF", 
                    "#F0F7FF"
                  ]
                }
              ]
            },
            chartOptions: {
              responsive: true,
              maintainAspectRatio: false
            },
            plugins1: [],
            plugins2: [],
            plugins3: []
          }
        },
        created: function() {
          var p1 = Number(this.$store.state.suppliesDataSets[this.$route.params.warehouseId-1][0].data[0])/2;
          var p2 = Number(this.$store.state.suppliesDataSets[this.$route.params.warehouseId-1][1].data[0])/2;
          var p3 = Number(this.$store.state.suppliesDataSets[this.$route.params.warehouseId-1][2].data[0])/2;
          this.chartData1.datasets[0].data.push(p1);
          this.chartData1.datasets[0].data.push(100-p1);
          this.chartData2.datasets[0].data.push(p2);
          this.chartData2.datasets[0].data.push(100-p2);
          this.chartData3.datasets[0].data.push(p3)
          this.chartData3.datasets[0].data.push(100-p3)
          this.plugins1 = [
            {
              id: "doughnutChart1",
              beforeDraw: function(chart) {
                  var width = chart.width,
                      height = chart.height,
                      ctx = chart.ctx;
                  var val = p1;
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
          ]
          this.plugins2 = [
            {
              id: "doughnutChart2",
              beforeDraw: function(chart) {
                  var width = chart.width,
                      height = chart.height,
                      ctx = chart.ctx;
                  var val = p2;
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
          ]
          this.plugins3 = [
            {
              id: "doughnutChart3",
              beforeDraw: function(chart) {
                  var width = chart.width,
                      height = chart.height,
                      ctx = chart.ctx;
                  var val = p3;
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
            ]
        },
    }
</script>