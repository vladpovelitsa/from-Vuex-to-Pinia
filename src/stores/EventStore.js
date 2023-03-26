import { defineStore } from "pinia";
import EventService from "../services/EventService";

export const useEventStore = defineStore('eventStore', {
    state: () => ({
        events: [],
        event: {},
    }),
    actions: {
        fetchEvents() {
            return EventService.getEvents()
                .then(response => {
                    console.log(response)
                    this.events = response.data
                })
                .catch(error => {
                    throw error
                })
        },
        createEvent(event) {
            return EventService.postEvent(event)
                .then(() => {
                    this.events.push(event)
                })
                .catch(error => {
                    throw error
                })
        },
        fetchEvent(id) {
            return EventService.getEvent(id)
                .then(response => {
                    this.event = response.data
                })
                .catch(error => {
                    throw error
                })
        }
    },
    getters: {
        numberOfEvents: state => state.events.length
    }
})