<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex class="card-w"
        v-for="card in cards"
        :key="card.title"
      >
        <v-card>
          <router-link :to="'/games/' + card.title" class="media-link">
          <v-card-media :src="card.img" height="200px">
            <v-layout column>
              <!-- <v-card-title>
                <span class="headline"></span>
                <v-spacer></v-spacer>
                <v-menu bottom left>
                  <v-btn icon slot="activator" dark>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                  <v-list>
                    <v-list-tile>
                      <v-list-tile-title> shared </v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </v-card-title> -->
              <v-spacer></v-spacer>
              <v-card-title class="white--text pl-4 pt-5">
                <div class="headline pt-5 ell-text">{{ card.title }}</div>
              </v-card-title>
            </v-layout>
          </v-card-media>
          </router-link>
          <v-list two-line subheader>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="../assets/images/avatar.jpg" alt="iEcho">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ card.author }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ card.time }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon ripple>
                  <v-icon color="grey lighten-1">keyboard_arrow_right</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            
          </v-list>
          <v-card-actions>
            <v-btn class="teal--text" flat>Play</v-btn>
            <v-spacer></v-spacer>
            <v-btn class="cyan--text" flat
              :to="'/games/' + card.title"
            >More</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="empty card-w"
        v-for="i in addEmptyCard"
        :key="i"
      ></v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      addEmptyCard: 0,
      cards: [
        {
          title: '歼魔计划人类篇',
          img: '../static/img/ali.png',
          author: 'iEcho',
          time: '2018-01-11'
        },
        {
          title: 'mota2',
          img: '../static/img/ali.png',
          author: 'iEcho',
          time: '2018-01-11'
        },
        {
          title: 'mota3',
          img: '../static/img/ali.png',
          author: 'iEcho',
          time: '2018-01-11'
        },
        {
          title: 'mota4',
          img: '../static/img/ali.png',
          author: 'iEcho',
          time: '2018-01-11'
        },
        {
          title: 'mota5',
          img: '../static/img/ali.png',
          author: 'iEcho',
          time: '2018-01-11'
        }
      ]
    }),
    mounted () {
      const reloadgrid = () => {
        let len = this.cards.length
        let winwidth = window.innerWidth
        let col = Math.floor((winwidth - 16) / 250)
        this.addEmptyCard = col - (len % col === 0 ? col : len % col)
      }
      reloadgrid()
      window.addEventListener('resize', reloadgrid)
    }
  }
</script>

<style lang="stylus" scoped>
.ell-text
  white-space nowrap
  max-width 225px
  overflow hidden
  text-overflow ellipsis

.card-w
  width 250px

.empty
  visibility hidden

.media-link
  text-decoration none
</style>