<template>
    <v-row v-for="n in 3" :key="n" class="d-flex child-flex" justify="center" align="center" cols="3">
        <v-img class="px-16 py-5" :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"></v-img>
    </v-row>
</template>

<script>
import LgPositionControler from '@/controller/lgPositionController';
const controllerTest = new LgPositionControler();

export default {
    data: () =>({
        position: '',
    }),
    async created() {
        await controllerTest.getPosition('http://localhost:7171/api/patient')
    },
}

</script>

<style></style>