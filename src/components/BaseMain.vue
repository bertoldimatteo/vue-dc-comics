<template>
  <main>
    <div class="baseMain">
      <div class="hero"></div>
      <div class="card-section">
        <div class="container">
          <div class="button-current-series">
              <button class="btn btn-big" type="button"><a href="#">CURRENT SERIES</a></button>
          </div>
          <SectionProducts />
          <div class="button-load-more">
              <button class="btn" type="button"><a href="#">LOAD MORE</a></button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SectionProducts from '../components/section/SectionProducts.vue';

export default {
  name: "BaseMain",
  components: {
    SectionProducts,
  }
};
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("../assets/img/jumbotron.jpg");
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
}
.card-section {
  background-color: var(--second-color);
  position: relative;
}
a {
  text-decoration: none;
  color: #fff;
}
.button-current-series {
  position: absolute;
  top: -20px;
}
.button-load-more {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}
.btn-big a {
  font-size: 1.125rem;
}
.btn {
  padding: 10px 45px;
  border: none;
  background-color: var(--third-color);
  color: #fff;
  font-size: .75rem;
  font-weight: 500;
}
</style>