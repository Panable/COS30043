<template>
  <div class="col-12 col-md-6 col-lg-4">
    <v-card class="h-100">
      <v-card-item>
        <v-card-title>
          <v-icon :icon="icon" class="mr-2"></v-icon>
          {{ title }}
        </v-card-title>
      </v-card-item>
      
      <v-card-text>
        {{ description }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  icon: String
})
</script>
