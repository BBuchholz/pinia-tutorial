<script setup>
  // This entire file is from:
  // https://blog.logrocket.com/complex-vue-3-state-management-pinia/#creating-views-and-components-in-pinia
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { usePostStore } from '../stores/post'

  const { posts, loading, error } = storeToRefs(usePostStore())
  const { fetchPosts } = usePostStore()

  fetchPosts()
</script>

<template>
  <main>
    <p v-if="loading">Loading posts...</p>
    <p v-if="error">{{ error.message }}</p>
    <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
    <p v-if="posts" v-for="post in posts" :key="post.id">
      <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
      <p>{{ post.body }}</p>
    <!-- eslint-disable-next-line vue/no-parsing-error -->
    </p>
  </main>
</template>