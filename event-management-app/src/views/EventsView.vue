<template>
  <div class="container mt-5">
    <h1 class="text-center mb-5">Event Information</h1>
    
    <EventTable :events="events" />
  </div>
</template>

<script setup>
import EventTable from '@/components/EventTable.vue'
import { ref } from 'vue'
</script>
