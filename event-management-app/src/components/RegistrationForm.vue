<template>
  <v-card>
    <v-card-title class="text-center">Event Registration</v-card-title>
    
    <v-card-text>
      <v-form @submit.prevent="handleSubmit">
        <div class="mb-1">Username</div>
        <v-text-field
          v-model="username"
          aria-label="Username"
          required
          variant="outlined"
        ></v-text-field>
        
        <div class="mb-1">Password</div>
        <v-text-field
          v-model="password"
          aria-label="Password"
          type="password"
          required
          variant="outlined"
        ></v-text-field>
        
        <div class="mb-1">Confirm Password</div>
        <v-text-field
          v-model="confirmPassword"
          aria-label="Confirm Password"
          type="password"
          required
          variant="outlined"
          :error="!passwordsMatch"
          :error-messages="!passwordsMatch ? 'Passwords do not match' : ''"
        ></v-text-field>
        
        <div class="mb-1">Event Category</div>
        <v-radio-group v-model="selectedCategory">
          <v-radio 
            v-for="category in uniqueCategories" 
            :key="category"
            :value="category"
            :aria-label="`${category} category`"
          >
            <template #label>
              <span>{{ category }}</span>
            </template>
          </v-radio>
        </v-radio-group>
        
        <div class="mb-1">Select Event</div>
        <v-select
          v-model="selectedEvent"
          :items="filteredEvents"
          item-title="eventname"
          item-value="eventid"
          aria-label="Select Event"
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
import { useEvents } from '@/composables/useEvents'

// Form fields
const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const selectedCategory = ref('Business')
const selectedEvent = ref(null)
const showSummary = ref(false)

// Sample events data
const { events } = useEvents()

// Get unique categories from events
const uniqueCategories = computed(() => {
  const categories = new Set(events.value.map(event => event.category))
  return Array.from(categories)
})

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
  }
}
</script>
