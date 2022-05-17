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
  <div>
    <form class="search-form" @submit.prevent="submit">
      <input type="text" v-model="query" placeholder="サイト内検索">
    </form>
  </div>
</template>

<style scoped>
input[type=text] {
  font-size: 14px;
  padding: 4px 8px;
  box-sizing: border-box;
  border-radius: 10px;
  border: solid 1px #ccc;
  background-color: #eee;
  font-family: "Ubuntu", "Noto Sans JP", sans-serif;
  display: inline-block;
  width: 100%;
  height: 30px;
}

input[type=text]:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(0, 134, 107, 0.25);
}
</style>
