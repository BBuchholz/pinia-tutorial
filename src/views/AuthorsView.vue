<script setup>
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useAuthorStore } from '../stores/author'

  const { authors } = storeToRefs(useAuthorStore())
  const { fetchAuthors } = useAuthorStore()

  fetchAuthors()
</script>

<template>
  <div>
    <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
    <p v-if="authors" v-for="author in authors" :key="author.id">
      <RouterLink :to="`/author/${author.username}`">{{ author.name }}</RouterLink>
    </p>
  </div>
</template>