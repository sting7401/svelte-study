import { writable } from 'svelte/store';

export const meetups = writable([
    {
        id: 'm1',
        title: 'title',
        subtitle: 'learn',
        desc: 'desc',
        imageUrl:
            'https://cdn.pixabay.com/photo/2023/01/05/08/17/bird-7698384__340.jpg',
        address: 'new york',
        contactEmail: 'skaldjfk@mail.com',
        isFavor: false,
    },
    {
        id: 'm2',
        title: 'title',
        subtitle: 'learn',
        desc: 'desc',
        imageUrl:
            'https://cdn.pixabay.com/photo/2023/01/05/08/17/bird-7698384__340.jpg',
        address: 'new york',
        contactEmail: 'skaldjfk@mail.com',
        isFavor: false,
    },
]);

export const customMeetupStore = {
    subscribe : meetups.subscribe,
    addMeetups: (meetData) => {
        const newMeetups = {
            ...meetData,
            isFav: false
        };
        meetups.update(items => {
            return [newMeetups, ...items]
        })
    },
    toggleFav: (id) => {
        meetups.update(items => {
            const updatedMeetup = { ...items.find((m) => m.id === id) };
            updatedMeetup.isFavor = !updatedMeetup.isFavor;
            const meetupIndex = items.findIndex((m) => m.id === id);
            const updatedMeetups = [...items];
            updatedMeetups[meetupIndex] = updatedMeetup;

            return updatedMeetups;
        })
        
    }
}