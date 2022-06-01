<template>
  <div id="app">
    <BaseHeader/>
    <BaseMain/>
    <BaseFooter/>
  </div>
</template>

<script>

import BaseHeader from './components/BaseHeader.vue';
import BaseMain from './components/BaseMain.vue';
import BaseFooter from './components/BaseFooter.vue';

export default {
  name: 'App',
  components: {
    BaseHeader,
    BaseMain,
    BaseFooter,
  }
}
</script>

<style lang="scss">
@import 'assets/style/global.scss';
</style>
