<template>
  <!-- <v-container fluid fill-height> -->
    <div>
      <section>
        <v-parallax src="../static/img/cool-background.png" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img src="../assets/images/logo.png" alt="H5魔塔" height="200">
            <h1 class="white--text mt-2 mb-2 display-1 text-xs-center">H5魔塔社区</h1>
            <div class="subheading mb-3 text-xs-center">Powered by motajs</div>
            <div class="text-xs-center">
              <v-btn
                class="blue lighten-2 mt-5"
                dark
                large
                href="https://ckcz123.github.io/mota-js"
              >
                查看文档
              </v-btn>
              <v-btn
                class="mt-5 blue--text"
                large
                light
                href="/games"
              >
                游戏列表
              </v-btn>
            </div>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way to start developing</h2>
              <span class="subheading">
                Cras facilisis mi vitae nunc 
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4 v-for="(feature, index) in features" :key="index" @mouseover="feature.isHover = true" @mouseleave="feature.isHover = false">
                  <v-card :class="[feature.isHover ? 'elevation-2' : 'elevation-0', 'transparent']">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">{{ feature.icon }}</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">{{ feature.title }}</div>
                    </v-card-title>
                    <v-card-text>
                      {{ feature.content }}
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src=" " height="380">
          <v-layout column align-center justify-center>
            <div class="headline blue--text mb-3 text-xs-center">Web development has never been easier</div>
            <em class="blue--text">Kick-start your application today</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/games"
            >
              开始游戏
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
  </div>
  <!-- </v-container> -->
</template>

<script>
  export default {
    data: () => ({
      features: [
        {
          isHover: false,
          icon: 'phonelink',
          title: '跨平台适配',
          content: `Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. `
        },
        {
          isHover: false,
          icon: 'flash_on',
          title: '快速造塔',
          content: `Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. `
        },
        {
          isHover: false,
          icon: 'library_books',
          title: '详细文档',
          content: `Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. `
        },
        {
          isHover: false,
          icon: 'language',
          title: '魔塔交流社区',
          content: `Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. `
        },
        {
          isHover: false,
          icon: 'cloud_upload',
          title: '作品上传',
          content: `Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. `
        },
        {
          isHover: false,
          icon: 'insert_chart',
          title: '数据统计',
          content: `Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. `
        }
      ]
    })
  }
</script>
