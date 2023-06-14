<template>
  <main>
    <p>MY PATIENTS</p>
    <p>{{ dicoms }}</p>
    <button @click="callEndpoint()">GET DICOMS</button>
  </main>
</template>

<script >
import axios from 'axios'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:7171/')

export default {
  data() {
    return {
      dicoms: 'HELLO NATA',
    }
  },
  created() {
    socket.on('change', (change) => {
      console.log(`something changed: ${change}`)
      this.callEndpoint();
    })
  },

  methods: {
    async callEndpoint() {
      this.dicoms = "hehehe"
      await axios.get('http://localhost:7171/api/patient')
        .then(response => {
          // Handle the response data
          console.log(response.data);
          this.dicoms = response.data
        })
        .catch(error => {
          // Handle the error
          console.error(error);
        });

    }
  }
}

</script>