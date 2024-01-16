import './app.css'
import App from './App.svelte'
import { createRoot } from 'svelte';

// const app = new App({
//   target: document.getElementById('app'),
// })


const app = createRoot(App, { target: document.getElementById("app") });


export default app
