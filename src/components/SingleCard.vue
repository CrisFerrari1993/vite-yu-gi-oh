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
        <img class="img-fluid mb-3" :src="info.card_images[0].image_url" :alt="info.name">
        <h4>{{ info.name }}</h4>
        <span>{{ info.archetype }}</span>
    </div>
</template>

<style lang="scss" scoped>
h4 {
    text-transform: uppercase;
    color: white;

    &::after {
        content: '';
        display: block;
        width: 40px;
        height: 1px;
        text-wrap: nowrap;
    }
}
</style>