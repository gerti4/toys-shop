<template>
  <div class="text-center">
    <v-btn
      dark
      @click="sheet = !sheet"
    >
      Share
    </v-btn>
    <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" height="200px">
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet = !sheet"
        >close</v-btn>
        <!-- <div class="py-3">This is a bottom sheet using the controlled by v-model instead of activator</div> -->
        <section>
          <socialSharing></socialSharing>
        </section>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>


<script>
  import socialSharing from './social-sharing.vue'
  export default {
    components:{
      socialSharing,
    },
    data(){
      return {
        sheet: false,

      }
    }
  }
</script>