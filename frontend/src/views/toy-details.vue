<template>
  <div>
    <img :src="toy.imgUrl" />
    <h1>{{toy.name}}</h1>
    <ul>
      <li v-for="(msg, idx) in msgs" :key="idx">{{msg.txt}}</li>
    </ul>
    <form @submit.prevent="sendMsg">
      <input class="my-input" type="text" v-model="msg.txt" />
      <button>Send</button>
    </form>
  </div>
</template>

<script>
import SocketService from "@/services/SocketService";

export default {
  data() {
    return {
      msg: { from: "Me", txt: "" },
      msgs: [],
      topic: ''
    };
  },
  computed: {
    toy() {
      return this.$store.getters.currToy;
    }
  },
  created() {
    SocketService.emit("chat topic", this.topic);
    console.log(this.toy);
    this.topic = this.toy._id
    SocketService.on("chat addMsg", msg => {
        console.log(msg);
        
      this.msgs.push(msg);
    });
  },
  methods: {
    sendMsg() {
      console.log("Sending", this.msg);
      SocketService.emit("chat newMsg", this.msg);
    }
  }
};
</script>

<style scoped>
input {
     background-color: white; 
    border-style: groove;
    color:  black;
}
</style>