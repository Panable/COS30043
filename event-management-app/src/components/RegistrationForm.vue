<template>
  <v-card>
    <v-card-title class="text-center">Event Registration</v-card-title>
    
    <v-card-text>
      <v-form @submit.prevent="handleSubmit">
        <v-text-field
          v-model="username"
          label="Username"
          required
          variant="outlined"
        ></v-text-field>
        
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          required
          variant="outlined"
        ></v-text-field>
        
        <v-text-field
          v-model="confirmPassword"
          label="Confirm Password"
          type="password"
          required
          variant="outlined"
          :error="!passwordsMatch"
          :error-messages="!passwordsMatch ? 'Passwords do not match' : ''"
        ></v-text-field>
        
        <v-radio-group v-model="selectedCategory" label="Event Category">
          <v-radio label="Business" value="Business"></v-radio>
          <v-radio label="Technology" value="Technology"></v-radio>
          <v-radio label="Finance" value="Finance"></v-radio>
          <v-radio label="Marketing" value="Marketing"></v-radio>
        </v-radio-group>
        
        <v-select
          v-model="selectedEvent"
          :items="filteredEvents"
          item-title="eventname"
          item-value="eventid"
          label="Select Event"
          variant="outlined"
          return-object
        ></v-select>
        
        <v-btn 
          type="submit" 
          color="primary" 
          block 
          class="mt-4"
          :disabled="!isFormValid"
        >
          Register
        </v-btn>
      </v-form>
      
      <v-alert
        v-if="showSummary"
        type="info"
        class="mt-4"
      >
        <h3>Registration Summary</h3>
        <p><strong>Username:</strong> {{ username }}</p>
        <p><strong>Category:</strong> {{ selectedCategory }}</p>
        <p><strong>Event Name:</strong> {{ selectedEvent.eventname }}</p>
      </v-alert>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// Form fields
const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const selectedCategory = ref('Business')
const selectedEvent = ref(null)
const showSummary = ref(false)

// Sample events data
const events = ref([
  { eventid: 'EVT10001', eventname: 'Tech Innovations Conference', category: 'Technology' },
  { eventid: 'EVT10002', eventname: 'Startup Pitch Day', category: 'Business' },
  { eventid: 'EVT10003', eventname: 'AI & Machine Learning Summit', category: 'Technology' },
  { eventid: 'EVT10004', eventname: 'Cybersecurity Workshop', category: 'Technology' },
  { eventid: 'EVT10005', eventname: 'Digital Marketing Bootcamp', category: 'Marketing' },
  { eventid: 'EVT10006', eventname: 'Blockchain and Cryptocurrency', category: 'Finance' },
  { eventid: 'EVT10007', eventname: 'Entrepreneurship Forum', category: 'Business' },
  { eventid: 'EVT10008', eventname: 'Data Science Hackathon', category: 'Technology' },
  { eventid: 'EVT10009', eventname: 'Leadership and Management Summit', category: 'Business' }
])

// Computed properties
const passwordsMatch = computed(() => {
  return password.value === confirmPassword.value
})

const filteredEvents = computed(() => {
  return events.value.filter(event => event.category === selectedCategory.value)
})

const isFormValid = computed(() => {
  return username.value && 
         password.value && 
         confirmPassword.value && 
         passwordsMatch.value && 
         selectedEvent.value
})

// Watch for category changes to reset selected event
watch(selectedCategory, () => {
  selectedEvent.value = null
})

// Form submission handler
const handleSubmit = () => {
  if (isFormValid.value) {
    showSummary.value = true
    // In a real app, you would send this data to a server
  }
}
</script>
