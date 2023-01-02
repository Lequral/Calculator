import './style.scss'
import App from './lib/components/App.svelte'

const app = new App({
  target: document.querySelector("main"),
})

export default app