import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import {v4 as uuidv4} from 'uuid';


const data = browser? JSON.parse(window.localStorage.getItem('st-todo-list')) ?? [] : [];

export const todos = writable(data);

todos.subscribe((value) => {
    if (browser) {
        localStorage.setItem('st-todo-list', JSON.stringify(value));
    }
})