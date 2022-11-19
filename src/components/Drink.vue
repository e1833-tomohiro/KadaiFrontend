<template>
  <div>
    <Detail></Detail>
    <br/>
    <b-nav tabs fill>
      <b-nav-item>
        <router-link :to="{ name: 'food', params: { warehouseId: this.$route.params.warehouseId }}"><h4>食料品</h4></router-link>
      </b-nav-item>
      <b-nav-item active>
        <router-link :to="{ name: 'drink', params: { warehouseId: this.$route.params.warehouseId }}"><h4>飲料水</h4></router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link :to="{ name: 'medicine', params: { warehouseId: this.$route.params.warehouseId }}"><h4>医薬品</h4></router-link>
      </b-nav-item>
    </b-nav>
    <LineChart :chartData="chartData"></LineChart>
    <br/>
    <ProPortion></ProPortion>
    <br/>
    <Record></Record>
  </div>
</template>
<script>
import LineChart from './chart/LineChart.vue'
import Detail from './static/Detail.vue'
import ProPortion from './chart/ProPortion.vue'
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
        labels: Object.values(this.$store.state.suppliesDataSets.labels).slice(0, 10).reverse(),
        datasets: [
          {
            label: '飲料水データ',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
            pointBackgroundColor: "#0000FF",
            borderColor: 'rgba(54, 162, 235, 1)',
            data: Object.values(this.$store.state.suppliesDataSets.datasets[this.$route.params.warehouseId-1][1]).slice(0, 10).reverse(),
          }
        ]
      },
    }
  },
}

</script>

<style>
  a {
    text-decoration: none; color: inherit;
  }
</style>