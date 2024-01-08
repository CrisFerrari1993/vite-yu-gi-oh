<script>
import SingleCard from './SingleCard.vue';

// store import
import { store } from '../store';

export default {
    name: 'CardsList',
    components: {
        SingleCard
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <aside class="container my-3">
        <select name="" id="">
            <option value="Alien">Alien</option>
        </select>
    </aside>
    <section class="container">
        <div class="row bg-black text-white py-2">
            <h5 class="m-0 fw-bold">Find 39 Cards</h5>
        </div>
        <div class="row bg-white">
            <div v-for="card in store.cardList" :key="card.id" class="card mx-5 mb-4 col-6 col-md-4 col-lg-2">
                <SingleCard :info="card" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.container {

    .card {
        background-color: #fcac00;
    }
}
</style>