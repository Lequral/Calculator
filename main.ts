import './style.scss'
import App from './../src/components/App.svelte'

const app = new App({
  target: document.querySelector("body"),
})

export default app