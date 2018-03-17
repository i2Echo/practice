<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex>
        <v-carousel prev-icon="mdi-arrow-left" next-icon="mdi-arrow-right">
          <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      items: [
        {
          src: '../static/img/ali.png'
        },
        {
          src: '../static/img/ali.png'
        },
        {
          src: '../static/img/ali.png'
        },
        {
          src: '../static/img/ali.png'
        }
      ]
    })
  }
</script>