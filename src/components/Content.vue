<template>
    <router-view></router-view>
    <br/>
    <Record v-if="this.$route.path!='/'"></Record>
</template>
<script>
    import Record from './Recorde.vue'
    export default{
        components: {
            Record
        }
    }
    //this.$store.commit('setSuppliesData', )
</script>