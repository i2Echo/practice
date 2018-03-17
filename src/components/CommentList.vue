<template>
  <!-- <v-layout row> -->
    <v-flex lg8 offset-lg1>
      <v-card flat tile>
        <div class="comment-list pa-2" v-for="comment in commentLists" :key="comment.floor">
          <v-divider></v-divider>
          <div class="coment-item">
            <v-avatar
              class="mt-3 fl"
              size="46px"
              slot="activator">
              <img :src="comment.userAvatar" alt="">
            </v-avatar>
            <div class="comment-info pt-3">
              <router-link class="a-style grey--text text--darken-2 subheading" to="">
                {{comment.user}}
              </router-link>
              <v-card-text class="pa-0 pt-1">
                <div class="text-break" v-html="comment.content"></div>
              </v-card-text>
              <v-card-actions
                class="pa-0"
              >
                <span class="grey--text">{{ '#' + comment.floor }}</span>
                <span class="mx-3 grey--text">{{ comment.time }}</span>
                <v-btn flat color="primary" small>回复</v-btn>
              </v-card-actions>
              <div class="comment-child" v-for="child in comment.children" :key="child.num">
                <v-avatar
                  class="mt-3 fl"
                  size="26px"
                  slot="activator">
                  <img :src="child.userAvatar" alt="">
                </v-avatar>
                <div class="comment-info pt-2">
                  <router-link class="a-style grey--text text--darken-2 subheading" to="">
                    {{child.user}}
                  </router-link>
                  <span class="ml-2">{{ (getReplyToName(comment.children, child.to)?'回复 @' + getReplyToName(comment.children, child.to) + ': ':'') + child.content}}</span>
                  <v-card-actions
                    class="pa-0"
                  >
                    <span class="mr-3 grey--text">{{ child.time }}</span>
                    <v-btn flat color="primary" small @click="addReply(child.num)">回复</v-btn>
                  </v-card-actions>
                </div>
              </div>
              <comment-input :v-if="isReply" ></comment-input>
            </div>
          </div>
        </div>
        
      </v-card>
    </v-flex>
  <!-- </v-layout> -->
</template>

<script>
import CommentInput from './CommentInput'

export default {
  name: 'comment-list',
  components: {
    'comment-input': CommentInput
  },
  data: () => ({
    commentLists: [
      {
        floor: 1,
        user: 'iEcho',
        userAvatar: '../static/img/avatar.jpg',
        time: '2018-01-23',
        content:
          '我是评论主体，陌上人如玉公子世无双陌上人如玉公子世无双陌上人如玉公子世无双陌上人如玉公子世无双陌上人如玉公子世无双',
        children: [
          {
            num: 0,
            to: -1,
            user: 'iecho1',
            userAvatar: '../static/img/avatar.jpg',
            time: '2018-01-23',
            content: '我是评论回复1'
          },
          {
            num: 1,
            to: -1,
            user: 'iecho2',
            userAvatar: '../static/img/avatar.jpg',
            time: '2018-01-23',
            content: '我是评论回复2'
          },
          {
            num: 2,
            to: 0,
            user: 'iecho3',
            userAvatar: '../static/img/avatar.jpg',
            time: '2018-01-23',
            content: 'nihao'
          }
        ]
      },
      {
        floor: 2,
        user: 'iEcho',
        userAvatar: '../static/img/avatar.jpg',
        time: '2018-01-23',
        content:
          '我是评论主体2<br>badbbasbd<br>sahdhskad，fhhhhhh，hhhhhhhhh，hhhhhhh，hhhhhhhhhhh<br>hhhhhhhh，hhhhhhhhhhhh，hhhhhhhhhhhhhhh，jgjgjjjjjjjj',
        children: [
          {
            num: 0,
            to: -1,
            user: 'iecho1',
            userAvatar: '../static/img/avatar.jpg',
            time: '2018-01-23',
            content: '我是评论回复1'
          },
          {
            num: 1,
            to: -1,
            user: 'iecho2',
            userAvatar: '../static/img/avatar.jpg',
            time: '2018-01-23',
            content: '我是评论回复2'
          },
          {
            num: 2,
            to: 0,
            user: 'iecho3',
            userAvatar: '../static/img/avatar.jpg',
            time: '2018-01-23',
            content: 'nihao'
          }
        ]
      }
    ],
    isReply: false
  }),
  methods: {
    getReplyToName: (children, to) => {
      return to === -1 ? null : children[to].user
    },
    addReply: comment => {
      this.isReply = !this.isReply
      let tiptext
      tiptext = comment.num !== -1 ? '回复 @' + comment.user + '：' : null

      return tiptext
    }
  }
}
</script>

<style lang="stylus" scoped>
.comment-info {
  margin-left: 70px;
  position: relative;
}

.comment-child .comment-info {
  margin-left: 40px;
}

.a-style {
  text-decoration: none;

  &:hover {
    color: #1976D2 !important;
  }
}
</style>

