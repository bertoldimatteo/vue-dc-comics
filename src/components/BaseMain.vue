<template>
  <main class="main">
      <div class="title container">
        <h1>Content goes here</h1>
      </div>
  </main>
</template>

<script>
export default {
    name: 'BaseMain', 
}
</script>

<style lang="scss" scoped>
.main {
    background-color: var(--second-color);
}
.title {
    color: var(--first-color);
    padding: 60px 0;
}
</style>