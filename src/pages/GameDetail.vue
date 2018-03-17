<template>
  <v-container fluid>
    <v-layout column>
      <!-- <v-flex>
        <div>game: {{gid}}</div>
      </v-flex> -->
      <game-frame></game-frame>
      <game-info></game-info>
      <comment></comment>
    </v-layout>
  </v-container>
</template>

<script>
import Comment from '@/components/Comment'
import GameFrame from '@/components/GameFrame'
import GameInfo from '@/components/GameInfo'

export default {
  components: {
    'comment': Comment,
    'game-frame': GameFrame,
    'game-info': GameInfo
  },
  props: ['gid']
}
</script>