window.addEventListener('load', e => {
  const events = document.getElementById("upcoming-events").children
  let today = new Date()
  today.setHours(0, 0, 0)
  for (const event of events){
    let eventDate = Date.parse(event.dataset.eventStart)
    console.log(eventDate)
    if (eventDate < today.getTime()){
      event.classList.add('hidden')
    }
  }
  // check if all events are hidden and display no results element
  const upcomingEvents = document.querySelectorAll('#upcoming-events > :not(.hidden)')
  if (upcomingEvents.length == 0){
    let p = document.createElement('p')
    p.innerText ="No Upcoming Events"
    p.classList.add('my-14')
    document.getElementById("upcoming-events").appendChild(p)
  }
})
