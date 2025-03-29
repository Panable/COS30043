import { ref } from 'vue'

const events = ref([
  { eventid: 'EVT10001', eventname: 'Tech Innovations Conference', category: 'Technology', durationhour: 8 },
  { eventid: 'EVT10002', eventname: 'Startup Pitch Day', category: 'Business', durationhour: 6 },
  { eventid: 'EVT10003', eventname: 'AI & Machine Learning Summit', category: 'Technology', durationhour: 10 },
  { eventid: 'EVT10004', eventname: 'Cybersecurity Workshop', category: 'Technology', durationhour: 4 },
  { eventid: 'EVT10005', eventname: 'Digital Marketing Bootcamp', category: 'Marketing', durationhour: 6 },
  { eventid: 'EVT10006', eventname: 'Blockchain and Cryptocurrency', category: 'Finance', durationhour: 5 },
  { eventid: 'EVT10007', eventname: 'Entrepreneurship Forum', category: 'Business', durationhour: 7 },
  { eventid: 'EVT10008', eventname: 'Data Science Hackathon', category: 'Technology', durationhour: 12 },
  { eventid: 'EVT10009', eventname: 'Leadership and Management Summit', category: 'Ligma', durationhour: 9 }
])

export function useEvents() {
  return {
    events
  }
}
