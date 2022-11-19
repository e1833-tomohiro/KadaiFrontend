<template>
    <div>
        <h4>{{warehouseNames[this.$route.params.warehouseId-1]}}公園 備蓄倉庫</h4>
    </div>
</template>
<script>
export default{
    data: function(){
        return{
            warehouseNames: ["朝霧", "大蔵海岸", "望海浜", "上ヶ池", "松江", "八木遺跡", "金ケ崎", "明石海浜"]
        }
    }
}
</script>