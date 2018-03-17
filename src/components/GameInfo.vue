<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3>
        <v-card>
          <v-card-media :src="game.img" height="200px">
          </v-card-media>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3>
        <v-card flat>
          <v-card-title>
            <div class="card__intro">
              <h3 class="headline" v-text="game.title"></h3>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    game: {
      title: 'mota1',
      img: '../static/img/ali.png',
      author: 'echo',
      maker: 'echo',
      time: '2018-02-24',
      rating: '6.5/10',
      view: '100',
      comment: '66',
      intro: 'balabala',
      statistics: [
        {
          categroy: '探路模式',
          total: 100,
          pass: 20,
          max: 1000,
          maxplayer: 'echo',
          maxdate: '2018-02-24'
        }
      ],
      reward: {
        enable: true,
        rewardItem: '100RMB',
        closed: true,
        winner: 'iecho'
      }
    }
  })
}
</script>