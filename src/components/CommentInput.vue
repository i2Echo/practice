<template>
    <v-card flat tile>
      <!-- <v-toolbar dark color="primary">
        <v-toolbar-title> Comment </v-toolbar-title>
      </v-toolbar> -->
      <v-card-text class="py-1">
        <v-avatar
          class="mt-4 fl"
          size="48px"
          color="grey"
          slot="activator">
          <img src="../assets/images/default.white.svg" alt="">
        </v-avatar>
        <v-form class="comment-field">
          <v-text-field 
            name="comment" 
            :label="commentStatus.isLogin ? commentStatus.normalLabel : commentStatus.unLabel" 
            id="comment" 
            multi-line
            rows="3"
            :disabled="!commentStatus.isLogin"
            type="text">
          </v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" class="mr-3 comment-btn" :disabled="!commentStatus.isLogin"> comment </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  name: 'CommentInput',
  // props: [
  //   'isReply',
  //   'text'
  // ],
  data: () => ({
    commentStatus: {
      isLogin: false,
      normalLabel: 'Input your comment',
      unLabel: 'Please login before comment！'
    }
  })
}
</script>
<style lang="stylus" scoped>
.comment-field
  margin-left 70px
.comment-btn
  margin-top -20px
</style>