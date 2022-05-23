<script setup lang="ts">

const query = ref('')

function canSubmit() {
  return !!query.value && !/^\s+$/.test(query.value)
}

function submit() {
  if (canSubmit()) {
    return navigateTo({
      path: '/search',
      query: {
        q: query.value
      }
    })
  }
}

</script>

<template>
  <v-form @submit.prevent="submit">
    <v-text-field label="Search" variant="outlined" v-model="query" color="success"></v-text-field>
  </v-form>
</template>