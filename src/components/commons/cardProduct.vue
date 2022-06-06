<template>
  <div class="comic-card">
    <a href="#">
        <div class="box-image">
            <img :src="thumb" alt="">
        </div>
        <div class="comic-title">
            <p>{{series}}</p>
        </div>
    </a>
  </div>
</template>

<script>
export default {
    name: 'cardProduct',
    props: {
        thumb: String,
        series: String,
    }
}
</script>

<style lang="scss" scoped>
.comic-card {
  max-width: 180px;
}
.box-image {
  width: 180px;
  height: 180px;
  background-color: aqua;
  display: flex;
  overflow: hidden;
  align-items: flex-start;
}
a {
    text-decoration: none;
}
.comic-title {
  width: 100%;

   & p {
    color: #fff;
    margin-top: 15px;
  }
}
</style>