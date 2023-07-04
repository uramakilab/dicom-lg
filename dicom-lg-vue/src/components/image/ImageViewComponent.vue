<template>
    <v-row v-for="n in 3" :key="n" class="d-flex child-flex" justify="center" align="center" cols="3" style="height: 33vh;">
        <v-img class="px-16 py-5" :src="getPath(n)" style="height: 100%;"></v-img>
    </v-row>
</template>
  
<script>
import { useLgPositionStore } from '../../store/lgPositionStore';
import io from 'socket.io-client'

const socket = io.connect('http://localhost:7171/');
const lgPosition = useLgPositionStore();

export default {
    computed: {
        positioning() {
            return lgPosition.$state.positioning;
        },
        images() {
            return lgPosition.$state.images;
        }
    },
    methods: {
        getPath(fileName) {
            return new URL(`../../assets/dicoms/mock/${fileName}.png`, import.meta.url).href;
        },
        async handlePositionChange(change) {
            console.log(change);
            await lgPosition.getPositions();
            console.log(JSON.parse(JSON.stringify(this.positioning)));
        }
    },
    async created() {
        socket.on('change', this.handlePositionChange);
        await lgPosition.getImages('6495cc254e05748bf50aa15b');
        console.log(JSON.parse(JSON.stringify(this.images)));

    }
};
</script>
  
<style></style>