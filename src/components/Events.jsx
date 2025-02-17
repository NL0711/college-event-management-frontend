import EventsCards from "./EventsCards";
import { useState, useEffect } from "react";

const Events = () => {

  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/events')
     .then(response => response.json())
     .then(data => setEvents(data))
     .catch(error => console.error('Error:', error));
  }, [])

  return (
    <div className="grid grid-cols-3 px-6 gap-x-4 gap-y-6">
      {events.map(event => (
        <EventsCards 
          key={event.id}
          title={event.title} 
          start_date={event.start_date}
          end_date={event.end_date}
          location={event.location}
          time_start={event.time_start} 
          time_end={event.time_end}
          src={event.image_src}
          /> ))}
    </div>
  )
}

export default Events