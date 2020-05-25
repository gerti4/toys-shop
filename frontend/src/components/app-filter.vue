<template>
  <section class="filter-container ">
   
      <v-card  >
        <v-toolbar class="filter d-flex flex-column" color="#1d1a1a" dark flat prominent height="100">
          <v-text-field
            class="mx-4 "
            flat
            hide-details
            label="Search"
            solo-inverted
            @input="doFilter()"
            v-model="filterby.name"
          ></v-text-field>
          <v-tabs slot="extension" color="white" background-color="transparent" fixed-tabs >
            <v-tab @click="setAll()" v-model="filterby.isAll">All</v-tab>
            <v-tab @click="setStock()" v-model="filterby.inStock">InStock</v-tab>
            <v-overflow-btn
              @change="setSort()"
              v-model="filterby.sort"
              :items="sortby"
              label="Sort By"
              class="pa-0"
            ></v-overflow-btn>
            <v-overflow-btn
              @change="setType()"
              v-model="filterby.type"
              :items="types"
              label="Select type"
              class="pa-0"
            ></v-overflow-btn>

            <v-tab color="white" @click="linkToAdd">
              <span class="my-add">Add Toys</span>
            </v-tab>
          </v-tabs>
        </v-toolbar>
      </v-card>
  </section>
</template>



<script>
export default {
  data() {
    return {
      filterby: {
        isAll: false,
        name: "",
        inStock: false,
        type: "",
        sort: ""
      },
      types: ["Educational", "Adult", "Funny", "General"],
      sortby: ["price", "name", "rank"]
    };
  },
  methods: {
    doFilter() {
      this.$store.commit({ type: "setFilter", filter: this.filterby });
    },
    setStock() {
      this.filterby.inStock = true;
      this.filterby.isAll = false;
      this.doFilter();
    },
    setAll() {
      this.filterby.inStock = false;
      this.filterby.isAll = true;
      this.doFilter();
    },
    setType() {
      this.filterby.isAll = false;
      this.doFilter();
    },
    setSort() {
      this.filterby.isAll = true;
      this.doFilter();
    },
    linkToAdd() {
      this.$router.push("/edit");
    }
  }
};
</script>

<style  scoped>
.my-add {
  color: #7da9ff;
}

</style>
