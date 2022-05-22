<script>

export default {
  data: () => ({ drawer: null }),
}
</script>

<template>
  <v-app id="inspire">
    <Header />
    <v-main class="bg-main">
      <NuxtPage></NuxtPage>
    </v-main>
  </v-app>
</template>
<style>
.bg-main {
  background-color: #edede8;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>