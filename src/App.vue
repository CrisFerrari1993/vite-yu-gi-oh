<script>
// import axios
import axios from 'axios';
//import children components
import AppHeader from './components/AppHeader.vue';
import CardsList from './components/CardsList.vue';

import { store } from './store';

export default {
  components: {
    AppHeader,
    CardsList
  }
}
</script>

<template>
  <AppHeader />
  <main>
    <CardsList />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
