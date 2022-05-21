<script>

export default {
  data: () => ({ drawer: null }),
}
</script>
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>
<style>
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