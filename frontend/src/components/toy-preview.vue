<template>
<section class="toy-preview-container">
   <v-hover v-slot:default="{ hover }">
  <v-card
    class="mx-auto toy-container"
    max-width="344"
    color="#443c3c"
    outlined
    :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4"><span v-if="toy.inStock">In stock</span>
        <span v-else>Out of stock</span>
        </div>
        <v-list-item-title class="headline mb-1">{{toy.name}}</v-list-item-title>
        <v-list-item-subtitle class="mt-2 mb-2">{{toy.price}}$</v-list-item-subtitle>
        <v-list-item-title>{{toy.type}}</v-list-item-title>

      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
      ><img :src="toy.imgUrl"></v-list-item-avatar>
    </v-list-item>
    <div class="text-center mt-1">
        <v-rating
          v-model="toy.rank"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          ripple
          readonly
        ></v-rating>
      </div>
    <v-card-actions>
      <v-btn @click="remove(toy._id)" text>Remove</v-btn>
      <v-btn @click="edit(toy._id)" text>Edit</v-btn>
      <v-btn @click="details(toy._id)" text>Details</v-btn>

    </v-card-actions>
  </v-card>
   </v-hover>
  </section>
</template>

<script>
import '../scss/global.scss'
import shareToy from './share-toy.vue'

export default {
  props:['toy'],
  components:{
    shareToy
  },
  methods:{
    remove(id){      
      this.$emit('remove',id)
    },
    edit(id){      
      this.$emit('edit',id) 
    },
    details(id){      
      this.$emit('details',id) 
    }
  }
}
</script>

<style  scoped>
.v-card {
  transition: opacity 0.3s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.75;
  
}
</style>
