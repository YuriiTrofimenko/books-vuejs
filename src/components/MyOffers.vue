<template lang="pug">
  div
    vs-prompt(@cancel='cancel' @accept='acceptAlert' @close='close' :is-valid="validTitle && validType" :active.sync='activeAddBookPrompt')
      div
        | Book Description
        vs-input(placeholder='title' v-model='currentBook.title')
        vs-select(label='type' v-model='currentBook.type')
          vs-select-item(:key='index' :value='typeOption.value' :text='typeOption.text' v-for='typeOption, index in typeOptions')
        vs-alert(:active='!validTitle || !validType' color='danger' icon='new_releases')
          | Все поля должны быть заполнены
    vs-row
      vs-col(vs-type='flex' vs-justify='center' vs-align='left' vs-w='6')
        h1 MyOffers
      vs-col(vs-type='flex' vs-justify='center' vs-align='right' vs-w='6')
        vs-tooltip(text='Add book')
          span
            vs-icon(icon='add' size='medium' color='white' bg='rgb(70, 150, 0)' @click='activeAddBookPrompt = true')
    vs-row
      vs-col(:key='index' v-for='book,index in books' vs-type='flex' vs-justify='center' vs-align='center' vs-w='6')
        span {{book.title}}
</template>

<script>
export default {
  name: 'MyOffers',
  data () {
    return {
      activeAddBookPrompt: false,
      currentBook: {
        title: '',
        type: null
      },
      typeOptions: [
        {text: 'дарю', value: 1},
        {text: 'дам почитать', value: 2}
      ]
    }
  },
  computed: {
    books () {
      // источник данных о моих книгах
      return this.$store.getters.myBooks
    },
    validTitle () {
      return (this.currentBook.title.length > 0)
    },
    validType () {
      return (this.currentBook.type !== null)
    }
  },
  methods: {
    acceptAlert (color) {
      this.$store.dispatch('newBook', {
        title: this.currentBook.title,
        author: '',
        description: '',
        city: '',
        type: this.currentBook.type,
        image: '',
        active: ''
      })
        .then(() => {
          this.$vs.notify({
            color: 'success',
            title: 'Book Created',
            text: `Book "${this.currentBook.title}" Created`
          })
          this.submitStatus = 'OK'
          console.log(this.submitStatus)
        })
        .catch(err => {
          this.submitStatus = err.message
          console.log(this.submitStatus)
        })
    },
    close () {
      this.$vs.notify({
        color: 'danger',
        title: 'Closed',
        text: 'You close a dialog!'
      })
    },
    cancel () {
      this.currentBook.title = ''
      this.currentBook.type = null
    }
  }
}
</script>

<style scoped lang="stylus">
  // .vs-tooltip
    // z-index 20000
    // display block
</style>
