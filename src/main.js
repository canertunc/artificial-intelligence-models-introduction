import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/style.css"
import router from "@/router.js"
import AppFooterSection from "@/components/AppFooterSection.vue"

const app = createApp(App)

app.component("AppFooterSection",AppFooterSection)
app.use(router)
app.mount('#app')
