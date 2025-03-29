<template>
  <div class="container mt-5">
    <h1 class="text-center mb-5">Event Management System</h1>
    
    <div class="text-center mb-5">
      <v-img
        :src="landingImage"
        max-height="400"
        cover
        class="rounded"
      ></v-img>
    </div>
    
    <h2 class="text-center mb-4">Why Choose Us</h2>
    
    <div class="row g-5 justify-content-center">
      <EventCard 
        v-for="(feature, index) in features" 
        :key="index"
        :title="feature.title"
        :description="feature.description"
        :icon="feature.icon"
      />
    </div>
  </div>
</template>

<script setup>
import EventCard from '@/components/EventCard.vue'
import landingImage from "@/assets/landing.jpg"

const features = [
  {
    title: 'Efficient Event Planning',
    description: 'We handle everything from start to finish, ensuring seamless execution.',
    icon: 'mdi-calendar-check'
  },
  {
    title: 'Expert Team',
    description: 'Our professional team with experience to create successful events.',
    icon: 'mdi-account-group'
  },
  {
    title: 'Cost-Effective Solutions',
    description: 'We provide budget-friendly event management.',
    icon: 'mdi-cash'
  },
  {
    title: 'On-Time Execution',
    description: 'Timely delivery is our priority to ensure a hassle-free experience.',
    icon: 'mdi-clock'
  },
  {
    title: 'High Customer Satisfaction',
    description: 'Our clients trust us for top-notch event experiences and services.',
    icon: 'mdi-emoticon-happy'
  },
  {
    title: 'Strong Communication',
    description: 'We keep you informed throughout the process for a smooth experience.',
    icon: 'mdi-chat'
  }
]
</script>
