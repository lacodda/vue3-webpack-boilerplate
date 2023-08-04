import { createApp } from 'vue';
import App from '@/components/App.vue';
import routes from '@/routes';
import ui from '@/ui';

createApp(App).use(ui).use(routes).mount('#app');
