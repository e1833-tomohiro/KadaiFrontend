<template>
  <div>
    <br/>
    <router-link to="/">
        <b-card
          title="一覧"
          tag="article"
          style="max-width: 12rem;"
          class="mb-2"
          v-fallbackImage
          title-tag="h6"
          :text-variant="this.$route.path=='/'?'primary':''"
          :bg-variant="this.$route.path=='/'?'light':''"
        >
        </b-card>
      </router-link>
    <router-link :to="{ name: 'food', params: { warehouseId: 1 }}">
        <b-card
          title="朝霧公園"
          tag="article"
          style="max-width: 12rem;"
          class="mb-2"
          v-fallbackImage
          title-tag="h6"
          :text-variant="this.$route.params.warehouseId==1?'primary':''"
          :bg-variant="this.$route.params.warehouseId==1?'light':''"
        >
        </b-card>
      </router-link>
      <router-link :to="{ name: 'food', params: { warehouseId: 2 }}">
        <b-card
          title="大蔵海岸公園"
          tag="article"
          style="max-width: 12rem;"
          class="mb-2"
          v-fallbackImage
          title-tag="h6"
          :text-variant="this.$route.params.warehouseId==2?'primary':''"
          :bg-variant="this.$route.params.warehouseId==2?'light':''"
        >
        </b-card>
      </router-link>
      <router-link :to="{ name: 'food', params: { warehouseId: 3 }}">
        <b-card
          title="望海浜公園"
          tag="article"
          style="max-width: 12rem;"
          class="mb-2"
          v-fallbackImage
          title-tag="h6"
          :text-variant="this.$route.params.warehouseId==3?'primary':''"
          :bg-variant="this.$route.params.warehouseId==3?'light':''"
        >
        </b-card>
      </router-link>
      <router-link :to="{ name: 'food', params: { warehouseId: 4 }}">
        <b-card
          title="上ヶ池公園"
          tag="article"
          style="max-width: 12rem;"
          class="mb-2"
          title-tag="h6"
          v-fallbackImage
          :text-variant="this.$route.params.warehouseId==4?'primary':''"
          :bg-variant="this.$route.params.warehouseId==4?'light':''"
        >
        </b-card>
      </router-link>
      <router-link :to="{ name: 'food', params: { warehouseId: 5 }}">
        <b-card
          title="松江公園"
          tag="article"
          style="max-width: 12rem;"
          class="mb-2"
          v-fallbackImage
          title-tag="h6"
          :text-variant="this.$route.params.warehouseId==5?'primary':''"
          :bg-variant="this.$route.params.warehouseId==5?'light':''"
        >
        </b-card>
      </router-link>
      <router-link :to="{ name: 'food', params: { warehouseId: 6 }}">
        <b-card
          title="八木遺跡公園"
          tag="article"
          style="max-width: 12rem;"
          class="mb-2"
          v-fallbackImage
          title-tag="h6"
          :text-variant="this.$route.params.warehouseId==6?'primary':''"
          :bg-variant="this.$route.params.warehouseId==6?'light':''"
        >
        </b-card>
      </router-link>
      <router-link :to="{ name: 'food', params: { warehouseId: 7 }}">
        <b-card
          title="金ヶ崎公園"
          tag="article"
          style="max-width: 12rem;"
          class="mb-2"
          v-fallbackImage
          title-tag="h6"
          :text-variant="this.$route.params.warehouseId==7?'primary':''"
          :bg-variant="this.$route.params.warehouseId==7?'light':''"
        >
        </b-card>
      </router-link>
      <router-link :to="{ name: 'food', params: { warehouseId: 8 }}">
        <b-card
          title="明石海浜公園"
          tag="article"
          style="max-width: 12rem;"
          class="mb-2"
          v-fallbackImage
          title-tag="h6"
          :text-variant="this.$route.params.warehouseId==8?'primary':''"
          :bg-variant="this.$route.params.warehouseId==8?'light':''"
        >
        </b-card>
      </router-link>
  </div>
</template>

<script>
  export default{
    directives: {
      fallbackImage: {
        mounted(el) {
          el.addEventListener('error', function(){
            el.src = "../../../public/static/img/noImage.jpg";
          })
        },
      }
    },
  }
</script>