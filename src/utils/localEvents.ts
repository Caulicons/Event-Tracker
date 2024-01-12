import eventsExample from "../data/eventsExample";
import { IEvento } from "../interfaces/IEvento";

const localEvents = {
  get: () => {
    verifyStorage();
    const events: IEvento[] = JSON.parse(
      localStorage.getItem("events") || "[]"
    );
    return events;
  },
  add: (event: IEvento) => {
    const storedEvents = JSON.parse(localStorage.getItem("events") || "[]");
    const updatedEvents = [...storedEvents, event];
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  },
  delete: (event: IEvento) => {
    const storedEvents: IEvento[] = JSON.parse(
      localStorage.getItem("events") || "[]"
    );
    const updatedEvents = storedEvents.filter(
      (storedEvent) => storedEvent.id !== event.id
    );
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  },
  update: (event: IEvento) => {
    const storedEvents: IEvento[] = JSON.parse(
      localStorage.getItem("events") || "[]"
    );
    const updatedEvents = storedEvents.map((storedEvent) =>
      storedEvent.id === event.id ? event : storedEvent
    );
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  },
};

const verifyStorage = () => {
  const verifyLocalStorage = localStorage.getItem("events");

  if (verifyLocalStorage === null) {
    localStorage.setItem("events", JSON.stringify(eventsExample));
  }
};

export default localEvents;
