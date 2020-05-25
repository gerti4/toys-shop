<template>
  <v-content v-if="toyToEdit">
    <form class="edit-container">
      <v-text-field v-model="toyToEdit.name" label="Toy name"></v-text-field>

      <v-text-field v-model="toyToEdit.price" v-mask="mask" label="Price"></v-text-field>

      <div v-if=" uplaoded" class="change-img">
        <v-text-field v-model="toyToEdit.imgUrl" label="Url img"></v-text-field>
        <v-btn @click="doUpload()" class="ma-2" tile outlined >
      <v-icon left>mdi-pencil</v-icon> Url
      </v-btn>
      </div>
      <div v-else class="change-img">
      <v-file-input
        label="File input"
        @change="uploadImg()"
        filled
        prepend-icon="mdi-camera"
      ></v-file-input>
      <v-btn @click="doUpload()" class="ma-2" tile outlined >
      <v-icon left>mdi-pencil</v-icon> File
      </v-btn>
      </div>

      <v-select v-model="toyToEdit.type" :items="items" label="Type"></v-select>
       <div class="text-center mt-1">
        <v-rating
          v-model="toyToEdit.rank"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
        ></v-rating>
      </div>
      <v-checkbox v-model="toyToEdit.inStock" label="In stock?"></v-checkbox>

      <v-btn class="mr-4"  @click="submit">submit</v-btn>
    </form>
  </v-content>
</template>


<script>
import { mask } from "vue-the-mask";
import { log } from "util";

export default {
  directives: {
    mask
  },

  data() {
    return {
      // toyToEdit: null,
      items: ["Educational", "Adult", "Funny"],
      checkbox: false,
      mask: "############",
      uplaoded: true
    };
  },
  methods: {
    submit() {
      if (this.$route.params.id) {
        this.$store
          .dispatch({ type: "editToy", toy: this.toyToEdit })
          .then(this.$router.push("/"));
      } else {
        if (this.toyToEdit.price) this.toyToEdit.price = +this.toyToEdit.price;
        this.$store
          .dispatch({ type: "addToy", toy: this.toyToEdit })
          .then(this.$router.push("/"));
      }
    },
    uploadImg() {
      this.$store
        .dispatch({ type: "uplaodToyImg", ev: event })
        .then(url => (this.toyToEdit.imgUrl = url));
    },
    doUpload() {
      this.uplaoded = !this.uplaoded;
    }
      
  },
  computed: {
    toyImg() {
      if (this.toyToEdit.imgUrl) return this.toyToEdit.imgUrl;
      return "Enter toy photo";
    },
    toyToEdit(){
      var toy
        if (this.$route.params.id) {
          toy = JSON.parse(JSON.stringify(this.$store.getters.currToy));
        }
        if(!toy) toy = {}
        return toy;
      }
  },
  created() {
    this.toyToEdit
  }
};
</script>


<style scopped>
.edit-container {
  margin: 50px;
  text-align: center;
}
.change-img {
  display: flex;
}
</style>