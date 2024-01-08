<script>
import SingleCard from './SingleCard.vue';
export default {
    name: 'CardsList',
    components: {
        SingleCard
    }
}
</script>

<template>
    <section class="container">
        <div class="row">
            <div class="col-6 col-md-4 col-lg-3">
                <SingleCard />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>