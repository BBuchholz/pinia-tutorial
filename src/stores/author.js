// this file adapted from: 
// https://blog.logrocket.com/complex-vue-3-state-management-pinia/
import { defineStore } from 'pinia'
import { usePostStore } from './post'

export const useAuthorStore = defineStore({
  id: 'author',
  state: () => ({
    authors: []
  }),
  getters: {
    getPostAuthor: (state) => {
      const postStore = usePostStore()
      return state.authors.find((author) => author.id === postStore.post.userId)
    }
  },
  actions: {
    async fetchAuthors() {
      this.authors = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
    }
  }
})
