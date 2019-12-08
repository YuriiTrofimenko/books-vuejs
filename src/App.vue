<template lang="pug">
  div#app
    v-card.mx-auto(height='400' width='256')
      v-navigation-drawer(permanent='')
        v-list-item
          v-list-item-content
            v-list-item-title.title
              | Application
            v-list-item-subtitle
              | subtext
        v-divider
        v-list(dense='' nav='')
          v-list-item(v-for='item in items' :key='item.title' link='')
            v-list-item-icon
              v-icon {{ item.icon }}
            v-list-item-content
              v-list-item-title {{ item.title }}
    router-view
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      items: [
        { title: 'Home', icon: 'mdi-home' },
        { title: 'Search', icon: 'mdi-book-search-outline' },
        { title: 'My Offers', icon: 'mdi-format-list-bulleted' },
        { title: 'Contacts', icon: 'mdi-contact-phone-outline' }
      ],
      right: null
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
