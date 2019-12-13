<template lang="pug">
  div
    div Home
    #firebaseui-auth-container(v-if="!checkUser")
</template>

<script>
import firebase from 'firebase'
import * as firebaseui from 'firebaseui'
import store from '../store'
import '../../node_modules/firebaseui/dist/firebaseui.css'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    checkUser () {
      return store.getters.checkUser
    }
  },
  mounted () {
    if (!this.checkUser) {
      // Инициализация и старт представления аутентификации Гугл
      var uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
      }
      let ui = firebaseui.auth.AuthUI.getInstance()
      if (!ui) {
        ui = new firebaseui.auth.AuthUI(firebase.auth())
      }
      ui.start('#firebaseui-auth-container', uiConfig)
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
