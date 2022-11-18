<template>
    <b-container>
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="records"
        ></b-pagination>

        <h5 class="mt-3">現在のページ: {{ currentPage }}</h5>
        <b-card-group id="records" v-for="item in dataSets" :key="item[0]" :per-page="perPage" :current-page="currentPage" deck>
            <b-card no-body :header="labels[(currentPage-1)*perPage+dataSets.indexOf(item)]">
                <b-list-group horizontal>
                    <b-list-group-item href="#">食料品: {{ item[0] }}箱</b-list-group-item>
                    <b-list-group-item href="#">飲料水: {{ item[1] }}箱</b-list-group-item>
                    <b-list-group-item href="#">医薬品: {{ item[2] }}箱</b-list-group-item>
                </b-list-group>
            </b-card>
        </b-card-group>
        <br/>
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="records"
        ></b-pagination>
    </b-container>
</template>

<script>
    export default{
        data: function(){
            return{
                labels: this.$store.state.suppliesDataSets[this.$route.params.warehouseId][0].labels,
                sampleDataSets: [],
                perPage: 7,
                currentPage: 1,
                index: 0
            }
        },
        created: function(){
            var food = 0;
            var drink = 0;
            var medicine = 0;
            var dayData = []
            for(var i=0; i<6; i++){
                for(var j=0; j<7; j++){
                    food = this.$store.state.suppliesDataSets[this.$route.params.warehouseId][0].data[j]
                    drink = this.$store.state.suppliesDataSets[this.$route.params.warehouseId][1].data[j]
                    medicine = this.$store.state.suppliesDataSets[this.$route.params.warehouseId][2].data[j]
                    dayData.push(food, drink, medicine);
                    this.sampleDataSets.push(dayData);
                    dayData = []
                }
            }
        },
        computed: {
            rows() {
                return this.labels.length;
            },
            dataSets(){
                var items = this.sampleDataSets;
                return items.slice(
                    (this.currentPage - 1) * this.perPage,
                    this.currentPage * this.perPage
                )

            }
        }
    }
</script>