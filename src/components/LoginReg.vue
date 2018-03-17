<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title> {{ isLogin ? 'Login' : 'Register' }} </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <v-btn
                icon
                large
                target="_blank"
                slot="activator"
              >
                <v-icon >help_outline</v-icon>
              </v-btn>
              <span>Need help?</span>
            </v-tooltip>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field 
                prepend-icon="person" 
                name="username" 
                :label="isLogin ? 'Username or Email':'Email'" 
                type="text"
              ></v-text-field>
              <v-text-field 
                prepend-icon="lock" 
                name="password" 
                label="Enter your password"
                hint="At least 8 characters" 
                id="password" 
                min="8"
                :append-icon="pw ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (pw = !pw)"
                :type="pw ? 'password' : 'text'"
              ></v-text-field>
              <v-text-field 
                v-if="!isLogin" 
                prepend-icon="lock" 
                name="repassword" 
                label="Confirm your password" 
                id="confirmPassword" 
                :append-icon="repw ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (repw = !repw)"
                :type="repw ? 'password' : 'text'"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="mr-2 mb-2" color="primary"> {{ isLogin ? 'Login' : 'Register' }} </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'LoginReg',
  props: {
    isLogin: {
      type: Boolean,
      defualt: true
    }
  },
  data: () => ({
    pw: true,
    repw: true
  })
}
</script>