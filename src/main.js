// import './assets/main.css'
import "animate.css";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

router.afterEach((to, from) => {
    window.scrollTo(0, 0);
});