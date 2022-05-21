<script setup lang="ts">
const { drawer } = useDrawer()

function toHome() {
  return navigateTo({
    path: `/`,
  })
};

</script>

<template>
  <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
    <template v-slot:image>
      <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
    </template>

    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Qlitre's Life</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon :to="`/`">
      <v-icon>
        fa fa-home
      </v-icon>

    </v-btn>

    <v-btn icon>
      <v-icon>fa fa-search</v-icon>
    </v-btn>
    <v-btn icon :href="`https://github.com/qlitre`" target="_blank">
      <v-icon>fab fa-github</v-icon>
    </v-btn>
  </v-app-bar>

</template>