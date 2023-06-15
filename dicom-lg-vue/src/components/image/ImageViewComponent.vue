<template>
    <v-row v-for="n in 3" :key="n" class="d-flex child-flex" justify="center" align="center" cols="3">
        <v-img :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`">

        </v-img>
    </v-row>
</template>

<script>

</script>

<style></style>