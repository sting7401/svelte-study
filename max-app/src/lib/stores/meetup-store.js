import { writable } from 'svelte/store';

const meetups = writable([]);

const customMeetupStore = {
	subscribe: meetups.subscribe,
	setMeetups: (meetupArray) => {
		meetups.set(meetupArray);
	},
	addMeetups: (meetData) => {
		const newMeetups = {
			...meetData
			// id: Math.random().toString(),
			// isFavor: false
		};
		meetups.update((items) => {
			return [newMeetups, ...items];
		});
	},
	updatedMeetups: (id, meetupData) => {
		meetups.update((items) => {
			const meetupIndex = items.findIndex((i) => i.id === id);
			const updatedMeetup = { ...items[meetupIndex], ...meetupData };
			const updatedMeetups = [...items];
			updatedMeetups[meetupIndex] = updatedMeetup;
			return updatedMeetups;
		});
	},
	removeMeetups: (id) => {
		meetups.update((items) => {
			return items.filter((i) => i.id !== id);
		});
	},
	toggleFav: (id) => {
		meetups.update((items) => {
			const updatedMeetup = { ...items.find((m) => m.id === id) };
			updatedMeetup.isFavor = !updatedMeetup.isFavor;
			const meetupIndex = items.findIndex((m) => m.id === id);
			const updatedMeetups = [...items];
			updatedMeetups[meetupIndex] = updatedMeetup;

			return updatedMeetups;
		});
	}
};

export default customMeetupStore;
