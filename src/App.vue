<script>
// import axios
import axios from 'axios';
//import children components
import AppHeader from './components/AppHeader.vue';
import CardsList from './components/CardsList.vue';
import AppSearch from './components/AppSearch.vue';

import { store } from './store';

export default {
  components: {
    AppHeader,
    CardsList,
    AppSearch,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCards() {
      let myUrl = store.apiURL;

      if (store.searchText !== '') {
        myUrl += `?archetype=${store.searchText}`
      }

      axios
        .get(myUrl)
        .then((res => {
          store.cardList = res.data.data;
          console.log(res.data.data);
        }))
        .catch((err) => {
          console.log('Errori', err);
        });
    }
  },
  created() {
    this.getCards();
  }
}
</script>

<template>
  <AppHeader />
  <main>
    <AppSearch />
    <CardsList />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
