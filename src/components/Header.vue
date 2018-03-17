<template>
  <div class="header">
    <v-navigation-drawer
      temporary
      v-model="drawer"
      fixed
      width="250"
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="../assets/images/avatar.jpg" alt="iEcho">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>iEcho</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list class="pa-1">
        <v-list-tile v-for="page in pages" :key="page.name"
          :to="page.router" exact>
          <v-list-tile-action>
            <v-icon>{{ page.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ page.name }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app>
      <v-btn class="hidden-md-and-up"
        icon
        @click.stop="drawer = !drawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
      <router-link to="/" class="ml-4">
        <img src="../assets/images/logo.png" height="38px">
      </router-link>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn active-class="default-class primary--text" flat v-for="page in pages" :key="page.name" 
          :to="page.router" exact
          >{{ page.name }}
        </v-btn>

        <v-menu bottom offset-y>
          <v-avatar slot="activator" size="36px" class="ma-3">
            <img src="../assets/images/avatar.jpg" alt="iEcho">
          </v-avatar>
          <v-list>
            <v-list-tile>
              <v-list-tile-title> profile </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      title: 'H5魔塔',
      drawer: false,
      fixed: false,
      pages: [
        { name: 'Home', router: '/', icon: 'home' },
        { name: 'Games', router: '/games', icon: 'games' },
        { name: 'About', router: '/about', icon: 'info' },
        { name: 'Login', router: '/login', icon: 'account_box' },
        { name: 'Reg', router: '/reg', icon: 'input' }
      ]
    })
  }
</script>

<style lang="stylus" scoped>

</style>