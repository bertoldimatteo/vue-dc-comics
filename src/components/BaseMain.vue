<template>
  <main>
    <div class="baseMain">
        <div class="hero"></div>
        <div class="card-section"></div>
    </div>
  </main>
</template>

<script>
export default {
    name: 'BaseMain',
}
</script>

<style lang="scss" scoped>
.hero {
  background-image: url('../assets/img/jumbotron.jpg');
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>