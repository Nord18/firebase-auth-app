<template>
  <div id="app">
    <v-app>
      <v-toolbar dark color="primary">
        <router-link class="app__title" tag="v-toolbar-title" to="/">Firebase login auth</router-link>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn class="app__link" to="/login" flat>Login</v-btn>
          <v-btn v-show="active" @click.prevent="logOut" class="app__link" flat>{{userStatus}}</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-app>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      link: '',
      active: false
    };
  },
  methods: {
    logOut() {
      this.$store.dispatch('logOutUser');
    }
  },
  computed: {
    userStatus() {
      if (firebase.auth().currentUser === null) {
        this.active = false
      } else {
        this.active = true
        return this.link = 'Signout'
      }
    }
  }
};
</script>

<style lang="scss">
@import "~vuetify/dist/vuetify.css";

.app {
  &__title {
    cursor: pointer;

    @media screen and (max-width: 320px) {
      font-size: 14px;
    }
  }

  &__link {
    @media screen and (max-width: 320px) {
      font-size: 13px;
    }
  }
}
</style>