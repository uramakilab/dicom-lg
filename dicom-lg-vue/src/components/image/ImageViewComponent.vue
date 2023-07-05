<template>
    <div>
        <v-slider v-if="images" v-model="currentIndex" :max="this.images.length - 1" :min="0" :step="stepSize"
            :tick-step="tickSize"></v-slider>
            
        <center v-if="!images || !images[currentIndex]">
            <div>{{ currentIndex }}</div>
            <div>carregando</div>
        </center>

        <v-img v-else class="px-16 py-5" :src="currentImageSrc" style="height: 100%;"></v-img>


    </div>
</template>
  
<script>
import { useLgPositionStore } from '../../store/lgPositionStore';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:7171/');
const lgPosition = useLgPositionStore();

export default {
    computed: {
        positioning() {
            return lgPosition.$state.positioning;
        },
        images() {
            return lgPosition.$state.images;
        },
        currentImageSrc() {
            console.log(this.currentIndex)
            return this.getImageSrc(this.images[this.currentIndex]);
        }
    },
    data() {
        return {
            currentIndex: 0,
            stepSize: 1,
            tickSize: 1
        };
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
            console.log('Image Buffer:', imageBuffer);

            const base64Data = btoa(String.fromCharCode.apply(null, imageBuffer.data));
            const dataUrl = `data:image/png;base64,${base64Data}`;
            console.log('Data URL:', dataUrl);

            return dataUrl;
        }
    },
    async created() {
        socket.on('change', this.handlePositionChange);
        await lgPosition.getImages('6495cc254e05748bf50aa15b');
    }
};
</script>
  
<style></style>