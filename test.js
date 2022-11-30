const ics = require('ics')
const { writeFileSync } = require('fs')
const event = {
    start: [2022, 11, 30, 6, 30],
    duration: { hours: 6},
    title: 'Bolder Boulder',
    recurrenceRule: 'FREQ=WEEKLY;BYDAY=SU;INTERVAL=1;COUNT=20'
  }
  ics.createEvent(event, (error, value) => {
    if (error) {
      console.log(error)
    }
  
    writeFileSync(`event.ics`, value)
  })