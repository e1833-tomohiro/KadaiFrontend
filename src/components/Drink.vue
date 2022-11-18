<template>
  <div>
    <Detail></Detail>
    <br/>
    <b-nav tabs fill>
      <b-nav-item>
        <router-link :to="{ name: 'food', params: { warehouseId: this.$route.params.warehouseId }}"><h3>食料品</h3></router-link>
      </b-nav-item>
      <b-nav-item active>
        <router-link :to="{ name: 'drink', params: { warehouseId: this.$route.params.warehouseId }}"><h3>飲料水</h3></router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link :to="{ name: 'medicine', params: { warehouseId: this.$route.params.warehouseId }}"><h3>医薬品</h3></router-link>
      </b-nav-item>
    </b-nav>
    <LineChart :chartData="chartData" :chartOptions="chartOptions"></LineChart>
    <br/>
    <ProPortion></ProPortion>
    <br/>
    <Record></Record>
  </div>
</template>
<script>
import LineChart from './LineChart.vue'
import Detail from './static/Detail.vue'
import ProPortion from './ProPortion.vue'
import Record from './Recorde.vue'
export default{
  components: {
    LineChart,
    Detail,
    ProPortion,
    Record
  },
  data: function(){
    return{
      chartData: {
        labels: Object.values(this.$store.state.suppliesDataSets[this.$route.params.warehouseId-1][1].labels).slice(0, 10).reverse(),
        datasets: [
          {
            label: '飲料水データ',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            data: this.$store.state.suppliesDataSets[this.$route.params.warehouseId-1][1].data.slice(0, 10).reverse()
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
}

</script>

<style>
  a {
    text-decoration: none; color: inherit;
  }
</style>