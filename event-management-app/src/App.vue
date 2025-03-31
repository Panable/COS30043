<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>Event Management System</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" variant="text">Home</v-btn>
      <v-btn to="/events" variant="text">Events</v-btn>
      <v-btn to="/register" variant="text">Register</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
// No script needed for basic layout
</script>
