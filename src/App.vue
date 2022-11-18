<template>
  <div>
    <Header></Header>
    <b-container fluid>
      <b-row>
        <b-col xl="2" lg="3" sm="12" class="sideBarStyle">
          <SideBar></SideBar>
        </b-col>
        <b-col xl="10" lg="9" sm="12">
          <br/>
          <Content></Content>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import router from './router'
import Header from '@/components/static/Header.vue'
import SideBar from '@/components/static/SideBar.vue'
import Content from '@/components/Content.vue'

export default {
  name: 'App',
  router,
  delimiters: ['[[', ']]'],
  components: {
    Header,
    SideBar,
    Content
  },
  data:  function(){
    return{
      pathname: "http://0.0.0.0:5000"
    }
  },
  created: function(){
    var api = this.axios.create();
    api.get('/api/getSuppliesDataSets')
      .then(response=>{
        this.initDataSets(response.data.dataSet)
      }).catch(response=>{
        console.log(response)
      })
  },
  methods: {
    initDataSets: function(dataSets){
      this.$store.reset()
      for(var i = 0; i<8; i++){
        this.$store.commit('init',dataSets[i]);
      }
      this.$store.commit('pop')
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.sideBarStyle{
  border: 0.1px solid #f0f0f0;
}
</style>
