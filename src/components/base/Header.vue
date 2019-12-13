<template lang="pug">
    vs-navbar.nabarx(v-model='activeItem')
      div(slot='title')
        vs-navbar-title
          | Home Library
      vs-navbar-item(
        v-for="(link, index) in linkMenu"
        :key="link.title"
        @click="menuShow = false"
        :index="index"
      )
        router-link.navbar-link(
          :to="`${link.url}`"
        ) {{ link.title }}
      //vs-navbar-item(index='0')
        a(href='#') Home
      //vs-navbar-item(index='1')
        a(href='#') News
      //vs-navbar-item(index='2')
        a(href='#') Update
    //md-app-toolbar.md-large.md-dense.md-primary(slot="md-app-toolbar")
      .md-toolbar-row
        .md-toolbar-section-start
          md-button.md-icon-button(@click='menuVisible = !menuVisible')
            md-icon menu
          span.md-title My Title
        .md-toolbar-section-end
          md-button.md-icon-button
            md-icon more_vert
      .md-toolbar-row
        md-tabs.md-primary(v-for='item in items' :key='item.title' link='')
          md-tab(:md-label='item.title')
          //md-tab#tab-home(md-label='Home')
          //md-tab#tab-pages(md-label='Search')
          //md-tab#tab-posts(md-label='MyOffers')
          //md-tab#tab-favorites(md-label='Contacts')
    //md-app-drawer(:md-active.sync='menuVisible')
      md-toolbar.md-transparent(md-elevation='0') Navigation
      md-list(v-for='item in items' :key='item.title' link='')
        md-list-item
          md-icon {{ item.icon }}
          span.md-list-item-text {{ item.title }}
        //md-list-item
          md-icon move_to_inbox
          span.md-list-item-text Home
        //md-list-item
          md-icon send
          span.md-list-item-text Search
        //md-list-item
          md-icon delete
          span.md-list-item-text MyOffers
        //md-list-item
          md-icon error
          span.md-list-item-text Contacts
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      menuShow: false,
      activeItem: 0,
      linkMenu: [
        { title: 'Home', url: '/', icon: 'mdi-home' },
        { title: 'Search', url: '/search', icon: 'mdi-book-search-outline' },
        { title: 'My Offers', url: '/my-offers', icon: 'mdi-format-list-bulleted' },
        { title: 'Contacts', url: '/contacts', icon: 'mdi-contact-phone-outline' }
      ]
    }
  }
}
</script>
<style scoped lang="stylus">
  .is-active-item
    font-weight bold
</style>
