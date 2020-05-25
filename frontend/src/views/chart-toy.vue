


<script>
import { Bar } from "vue-chartjs";
import { log } from 'util';
export default {
  extends: Bar,
  props: {
    height: "30",
    padding:"100"
  },
  computed: {
    toys() {
      var toys = this.$store.getters.allToys;
      var toysToShow = toys.reduce((acc,toy)=>{          
          acc.name.push(toy.name);
          acc.price.push(toy.price);
          return acc
      },{name:[],price:[]})
      return toysToShow
    },
  },

  watch: {
    toys(to,from){      
      this.renderChart({
         labels: this.toys.name,
  
        datasets: [
          {
            label: "Our toys prices",
            backgroundColor: "#f87979",
            data: this.toys.price
          }
        ]
      });
    },
  },
  mounted(){
     this.renderChart({
         labels: this.toys.name,
  
        datasets: [
          {
            label: "Our toys prices",
            backgroundColor: "#f87979",
            data: this.toys.price
          }
        ]
      });

  }
};
</script>

 

