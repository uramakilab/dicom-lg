<template>
    <v-row v-for="n in this.images" :key="n" class="d-flex child-flex" justify="center" align="center" cols="3"
        style="height: 33vh;">
        <v-img class="px-16 py-5" :src="getImageSrc(n)" style="height: 100%;"></v-img>
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
            location.reload()
        },
        getImageSrc(n) {
            const imageBuffer = JSON.parse(JSON.stringify(n));
            // console.log('Image Buffer:', imageBuffer);

            const base64Data = btoa(String.fromCharCode.apply(null, imageBuffer.data));
            const dataUrl = `data:image/png;base64,${base64Data}`;
            // console.log('Data URL:', dataUrl);

            return dataUrl;
        }
    },
    async created() {
        socket.on('change', this.handlePositionChange);
        await lgPosition.getImages('6495cc254e05748bf50aa15b');
        // console.log(JSON.parse(JSON.stringify(this.images)));
    }
};
</script>
  
<style></style>