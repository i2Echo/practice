<template>
  <v-footer class="main-footer">
    <v-layout row wrap ma-0>
      <v-flex xs12 sm6 md3 px-5 blue-grey darken-2>
        <h5 class="mb-3">H5Mota</h5>
        <ul>
          <li>
            <a href="https://ckcz123.github.io/mota-js/" target="_blank">
              <v-icon class="theme--dark">fa-book</v-icon>
              <span>Docs</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/ckcz123/mota-js" target="_blank">
              <v-icon class="theme--dark">fa-github</v-icon>
              <span>Github</span>
            </a>
          </li>
          <li>
            <a href="http://qun.qq.com/#jointhegroup/gid/539113091" target="_blank">
              <v-icon class="theme--dark">fa-qq</v-icon>
              <span>【539113091】</span>
            </a>
          </li>
        </ul>
      </v-flex>
      <v-flex xs12 sm6 md3 px-5 blue-grey darken-3>
        <h5 class="mb-3">关于我们</h5>
        <ul>
          <li>
            <a href="https://ckcz123.github.io/mota-js/">
              <span>About us</span>
            </a>
          </li>
          <li>
            <a href="https://ckcz123.github.io/mota-js/">
              <span>Changelog</span>
            </a>
          </li>
        </ul>
      </v-flex>
      <v-flex xs12 sm6 md3 px-5 blue-grey darken-3>
        <h5 class="mb-3">联系我们</h5>
        <ul>
          <li>
            <a href="https://ckcz123.github.io/mota-js/">
              <span>Feedback</span>
            </a>
          </li>
          <li>
            <a href="https://ckcz123.github.io/mota-js/">
              <span>Github</span>
            </a>
          </li>
          <li>
            <a href="https://ckcz123.github.io/mota-js/">
              <span>交流群</span>
            </a>
          </li>
        </ul>
      </v-flex>
      <v-flex xs12 sm6 md3 px-5 blue-grey darken-3>
        <h5 class="mb-3">友情链接</h5>
        <ul>
          <li>
            <a href="https://tieba.baidu.com/f?ie=utf-8&kw=%E9%AD%94%E5%A1%94" target="_blank">
              <span>魔塔吧</span>
            </a>
          </li>
          <li>
            <a href="https://ckcz123.github.io/mota-js/" target="_blank">
              <span>Github</span>
            </a>
          </li>
          <li>
            <a href="https://ckcz123.github.io/mota-js/">
              <span>交流群</span>
            </a>
          </li>
        </ul>
      </v-flex>
      <v-flex class="pa-2" blue-grey darken-4 xs12 text-xs-center>
        <div>© {{ new Date().getFullYear() }}</div>
        <!-- <v-spacer></v-spacer> -->
        <div>Site Design By 
          <a class="author" href="mailto:sama2echo+mtsite@gmail.com" target="_blank"> @iEcho</a>
        </div>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" scoped>
.main-footer
  background: #37424b;
  color: #fff;
  display: block;
  li 
    list-style none
    &:not(:last-child)
      padding-bottom 16px
      .icon
        font-size 18px
        margin-right 10px
  a
    text-decoration none
    color #cfd8dc
    font-size 16px
    &:hover
      color #fff
    >span
      position relative
      top 3px
  .flex
    padding 2em 3em
    >h5
      font-size 20px
  .author
    color #fff
    &:hover
      color #F48FB1
</style>