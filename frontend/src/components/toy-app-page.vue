<template>
  <section class="toy-app-container">
    <appFilter></appFilter>

    <toyList :toys="toys" @detailsToy="details" @removeToy="remove" @editToy="edit"></toyList>
  </section>
</template>

<script>
import toyList from "@/views/toy-list.vue";
import appFilter from '@/components/app-filter.vue'

export default {
  components: {
    toyList,
    appFilter
  },
  computed: {
    toys() {
      return this.$store.getters.toys;
    },

  },
  methods: {
    remove(id) {
      this.$store.dispatch({ type: "removeToy", id });
    },
    edit(id) {      
      this.$store.dispatch({ type: "getToy", id }).then(toy => {
        this.$router.push(`/edit/${toy.id}`);
      });
    },
    details(id){
      this.$store.dispatch({ type: "getToy", id }).then(toy => {
        this.$router.push(`/details/${toy._id}`);
      });

      
    }
  },
 
};
</script>
<style  scoped>
section {
  width: 100%;
}
</style>

