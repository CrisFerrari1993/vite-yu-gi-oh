<script>
import { store } from '../store';
import CardsList from './CardsList.vue';

export default {
    name: 'AppSearch',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="container p-0">
        <select class="form-select form-select my-3 small" aria-label=".form-select-sm example" v-model="store.searchText">
            <option selected>Select Archetyope of cards</option>
            <option v-for="info in CardsList">One</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
.small {
    width: 100px;
}
</style>