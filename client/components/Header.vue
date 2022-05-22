<template>
  <v-app-bar app color="teal-darken-4">
    <template v-slot:image>
      <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
    </template>
    <v-btn :to="`/`">
      <v-icon>fas fa-home</v-icon>
    </v-btn>
    <v-toolbar-title>Qlitre's Life</v-toolbar-title>
  </v-app-bar>
</template>