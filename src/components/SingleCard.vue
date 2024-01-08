<script>
export default {
    name: 'SingleCard'
}
</script>

<template>
    <div class="text-center">
        <img class="img-fluid mb-3" src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="">
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