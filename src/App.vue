<template>
  <div>
    <Header></Header>
    <b-container fluid>
      <b-row>
        <b-col xl="2" lg="2" sm="12" class="sideBarStyle">
          <SideBar></SideBar>
        </b-col>
        <b-col xl="10" lg="10" sm="12">
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
        //console.log(response.data.dataSets.labels, response.data.dataSets)
        this.$store.commit('init',response.data.dataSets);
      }).catch(response=>{
        console.log(response)
      })
  },
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

</style>
