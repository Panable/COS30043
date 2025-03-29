<template>
  <div>
    <div class="row mb-4">
      <div class="col-md-4">
        <v-text-field
          v-model="searchEventId"
          label="Search by Event ID"
          variant="outlined"
          clearable
        ></v-text-field>
      </div>
      <div class="col-md-4">
        <v-text-field
          v-model="searchEventName"
          label="Search by Event Name"
          variant="outlined"
          clearable
        ></v-text-field>
      </div>
      <div class="col-md-4">
        <v-text-field
          v-model="searchDuration"
          label="Search by Duration"
          variant="outlined"
          type="number"
          clearable
        ></v-text-field>
      </div>
    </div>
    
    <div class="mb-4">
      <v-radio-group v-model="selectedCategory" inline>
        <v-radio label="All" value="All"></v-radio>
        <v-radio label="Technology" value="Technology"></v-radio>
        <v-radio label="Business" value="Business"></v-radio>
        <v-radio label="Marketing" value="Marketing"></v-radio>
        <v-radio label="Finance" value="Finance"></v-radio>
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

const props = defineProps({
  events: {
    type: Array,
    required: true
  }
})

const searchEventId = ref('')
const searchEventName = ref('')
const searchDuration = ref('')
const selectedCategory = ref('All')

const filteredEvents = computed(() => {
  return props.events.filter(event => {
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
