<template>
  <div class="comment">
    <v-flex lg8 offset-lg1>
      <comment-input></comment-input>
    </v-flex>
    <comment-list></comment-list>
  </div>
  
</template>

<script>
import CommentList from './CommentList'
import CommentInput from './CommentInput'

export default {
  components: {
    'comment-list': CommentList,
    'comment-input': CommentInput
  },
  props: ['gid']
}
</script>
<style lang="stylus" scoped>
@media only screen and (max-width: 599px)
  .comment
    margin-left -24px
    margin-right -24px
</style>