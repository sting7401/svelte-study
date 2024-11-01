import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import {v4 as uuidv4} from 'uuid';

const stTodoList = String(window.localStorage.getItem('st-todo-list'))
const data : string[] = browser? JSON.parse(stTodoList) ?? [] : [];

export const todos = writable(data);

todos.subscribe((value) => {
    if (browser) {
        localStorage.setItem('st-todo-list', JSON.stringify(value));
    }
})