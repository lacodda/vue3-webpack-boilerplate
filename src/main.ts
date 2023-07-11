import { createApp } from 'vue';
import App from './components/App.vue';
import routes from './routes';
import './styles/index.scss';

createApp(App).use(routes).mount('#app');
