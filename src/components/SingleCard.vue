<script>
export default {
    name: 'SingleCard',
    props: {
        info: Object
    }
}
</script>

<template>
    <div class="text-center">
        <img class="img-fluid mb-3" :src="info.card_images.image_url" :alt="info.name">
        <h4>Nome carta</h4>
        <span>Tipo Carta</span>
    </div>
</template>

<style lang="scss" scoped>
h4 {
    text-transform: capitalize;
    color: white;

    &::after {
        content: '';
        display: block;
        width: 40px;
        height: 1px;
        margin: 1rem auto;
    }
}
</style>