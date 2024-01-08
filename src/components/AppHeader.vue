<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header class="container-fluid">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg" alt="">
        <h1>Yu-Gi-Oh Api</h1>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: white;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    img {
        width: 50px;
    }
}
</style>