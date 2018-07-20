<template>
  <v-fab-transition>
    <v-btn fixed 
      bottom right 
      fab dark 
      color="blue"
      v-scroll="onScroll"
      v-show="isShow"
      @click="toTop">
      <v-icon dark>keyboard_arrow_up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
  export default {
    name: 'totop',
    data: () => ({
      isShow: false
    }),
    methods: {
      onScroll () {
        if (typeof window === 'undefined') return
        const top = window.pageYOffset ||
          document.documentElement.offsetTop || 0
        this.isShow = top > 300
      },
      toTop () {
        this.$router.push({ hash: '' })
        this.$vuetify.goTo(0)
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>