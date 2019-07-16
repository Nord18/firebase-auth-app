<template>
  <div>
    <v-content>
      <v-container class="home" fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Registration form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="regist" v-model="valid" ref="form" lazy-validation>
                  <v-text-field
                    prepend-icon="email"
                    name="login"
                    label="Email"
                    type="text"
                    v-model="email"
                    :rules="emailRules"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                    v-model="password"
                    :rules="passwordRules"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="person"
                    name="user"
                    label="Name"
                    id="name"
                    type="text"
                    v-model="name"
                    :rules="nameRules"
                  ></v-text-field>
                    <p class="text-xs-center red--text">{{messageShow}}</p>
                    <v-btn type="submit" color="primary">Registration</v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      name: '',
      valid: true,
      emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
          (v) => !!v || 'Password is required',
          (v) => v && v.length >= 6 || 'Password must be less than 6 characters'
      ],
      nameRules: [
          (v) => !!v || 'Name is required',
          (v) => v && v.length >= 3 || 'Name must be less than 3 characters'
      ]
    };
  },
  methods: {
    regist() {
        if (this.$refs.form.validate() === true) {
            this.$store.dispatch('createUser', {email: this.email, password: this.password, name: this.name})
        }
    }
  },
  computed: {
      messageShow() {
          return this.$store.state.message
      }
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 90vh;
}
</style>