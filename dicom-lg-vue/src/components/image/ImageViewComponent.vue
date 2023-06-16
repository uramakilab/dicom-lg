<template>
    <v-row v-for="n in 3" :key="n" class="d-flex child-flex" justify="center" align="center" cols="3">
        <v-img class="px-16 py-5" :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"></v-img>
    </v-row>
    <v-btn>test button</v-btn>
</template>

<script>
import { useLgPositionStore } from '../../store/lgPositionStore';
import io from 'socket.io-client'
const socket = io.connect('http://localhost:7171/')
const lgPosition = useLgPositionStore();

export default {
    data: () => ({
    }),
    created() {
        socket.on('change', (change) => {
            console.log(`something changed: ${change}`)
            lgPosition.getPositions();
        })

    },
}

</script>

<style></style>