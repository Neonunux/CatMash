import { createApp } from 'vue';

import Application from './Application.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

createApp(Application)
  .use(store)
  .use(router)
  .mount('#application');
