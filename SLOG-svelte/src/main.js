import './lib/styles/main.css';
import { mount } from 'svelte';
import App from './App.svelte';
import { auth } from './lib/stores';

await auth.refresh();

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
