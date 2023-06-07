<template>
  <main>
    <p>MY PATIENTS</p>
    <p>{{dicoms}}</p>
    <button @click="callEndpoint()">GET DICOMS</button>
  </main>
</template>

<script >
import axios from 'axios'

export default{
  data(){
    return {
      dicoms:'HELLO NATA',
    }
  },
  
  methods:{
    async callEndpoint(){
      this.dicoms="hehehe"
      await axios.get('http://localhost:7171/api/lg')
      .then(response => {
        // Handle the response data
        console.log(response.data);
        this.dicoms=response.data
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  
    }
  }
}

</script>