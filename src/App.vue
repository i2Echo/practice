<template>
  <v-app light>
    <com-header></com-header>
    <v-content>
      <router-view></router-view>
    </v-content>
    <com-footer></com-footer>
    <totop></totop>
  </v-app>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  import Totop from './components/Totop'

  export default {
    components: {
      comHeader: Header,
      comFooter: Footer,
      totop: Totop
    }
  }
</script>
