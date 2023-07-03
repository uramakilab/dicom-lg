<template>
    <v-row v-for="n in 3" :key="n" class="d-flex child-flex" justify="center" align="center" cols="3" style="height: 33vh;">
        <v-img class="px-16 py-5" :src="getPath(n)" style="height: 100%;"></v-img>
    </v-row>
    <!-- <v-row justify="center" align="center" v-for="item in this.positioning">
        <div>{{ item.lg1 }}, {{ item.lg2 }}, {{ item.lg3 }}</div>
    </v-row> -->
</template>

<script>
import { useLgPositionStore } from '../../store/lgPositionStore';
import io from 'socket.io-client'
const socket = io.connect('http://localhost:7171/')
const lgPosition = useLgPositionStore();

export default {
    computed: {
        positioning() {
            return lgPosition.$state.positioning;
        }
    },
    methods: {
        getPath: function (fileName) {
            return new URL(`../../assets/dicoms/${fileName}.png`, import.meta.url).href
        }
    },
    created() {
        socket.on('change', (change) => {
            console.log(change)
            lgPosition.getPositions();
            console.log(this.positioning);
        })
    },
}

</script>

<style></style>