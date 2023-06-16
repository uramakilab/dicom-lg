<template>
    <v-row v-for="n in 3" :key="n" class="d-flex child-flex" justify="center" align="center" cols="3">
        <v-img class="px-16 py-5" :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"></v-img>
    </v-row>
    <v-btn>test button</v-btn>
</template>

<script>
import {useLgPositionStore} from '../../store/lgPositionStore';
const lgPosition = useLgPositionStore();

export default {
    data: () =>({
    }),
    async created() {
        await lgPosition.getPositions();
    },
}

</script>

<style></style>