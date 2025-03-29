<template>
  <div>
    <div class="row mb-4">
      <div class="col-md-4">
        <div class="mb-1">Search by Event ID</div>
        <v-text-field
          v-model="searchEventId"
          aria-label="Search by Event ID"
          variant="outlined"
          clearable
        ></v-text-field>
      </div>
      <div class="col-md-4">
        <div class="mb-1">Search by Event Name</div>
        <v-text-field
          v-model="searchEventName"
          aria-label="Search by Event Name"
          variant="outlined"
          clearable
        ></v-text-field>
      </div>
      <div class="col-md-4">
        <div class="mb-1">Search by Duration</div>
        <v-text-field
          v-model="searchDuration"
          aria-label="Search by Duration in hours"
          variant="outlined"
          type="number"
          clearable
        ></v-text-field>
      </div>
    </div>
    
    <div class="mb-4">
      <div class="mb-1">Filter by Category</div>
      <v-radio-group v-model="selectedCategory" inline>
        <v-radio label="All" value="All" aria-label="All categories"></v-radio>
        <v-radio 
          v-for="category in uniqueCategories"
          :key="category"
          :label="category"
          :value="category"
          :aria-label="`${category} category`"
        ></v-radio>
      </v-radio-group>
    </div>
    
    <v-table>
      <thead>
        <tr>
          <th>Event ID</th>
          <th>Event Name</th>
          <th>Category</th>
          <th>Duration (Hours)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in filteredEvents" :key="event.eventid">
          <td>{{ event.eventid }}</td>
          <td>{{ event.eventname }}</td>
          <td>{{ event.category }}</td>
          <td>{{ event.durationhour }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useEvents } from '@/composables/useEvents'

const { events } = useEvents()

const searchEventId = ref('')
const searchEventName = ref('')
const searchDuration = ref('')
const selectedCategory = ref('All')

// Get unique categories from events
const uniqueCategories = computed(() => {
  const categories = new Set(events.value.map(event => event.category))
  return Array.from(categories)
})

const filteredEvents = computed(() => {
  return events.value.filter(event => {
    const matchesId = searchEventId.value 
      ? event.eventid.toLowerCase().includes(searchEventId.value.toLowerCase())
      : true
      
    const matchesName = searchEventName.value 
      ? event.eventname.toLowerCase().includes(searchEventName.value.toLowerCase())
      : true
      
    const matchesDuration = searchDuration.value 
      ? event.durationhour.toString().includes(searchDuration.value)
      : true
      
    const matchesCategory = selectedCategory.value !== 'All'
      ? event.category === selectedCategory.value
      : true
      
    return matchesId && matchesName && matchesDuration && matchesCategory
  })
})
</script>
