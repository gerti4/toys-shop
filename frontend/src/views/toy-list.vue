<template>
  <div class="toy-list-container">
    <!-- <h1>Toy List</h1> -->
    <toyPreview v-for="toy in toys" :key="toy.id" :toy="toy" @details="toyDetails" @remove="removeToy" @edit="editToy"></toyPreview>   
  </div>
</template>


<script>
import '../scss/global.scss'
import toyPreview from '@/components/toy-preview'
export default {
  props: ['toys'],
  methods: {
    removeToy(id){
      this.$emit('removeToy',id)
    },
    editToy(id){
      this.$emit('editToy',id)
    },
    toyDetails(id){      
      this.$emit('detailsToy',id)
    }
  },
  name: 'toy-list',
  components:{
    toyPreview
  }

}
</script>


