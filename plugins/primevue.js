import Vue from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import MegaMenu from 'primevue/megamenu';
import Sidebar from 'primevue/sidebar';
import Editor from 'primevue/editor';
import Card from 'primevue/card';
import ScrollPanel from 'primevue/scrollpanel';

Vue.use(ToastService);

Vue.component('InputText', InputText);
Vue.component('Button', Button);
Vue.component('Toast', Toast);
Vue.component('MegaMenu', MegaMenu);
Vue.component('Sidebar', Sidebar);
Vue.component('Editor', Editor);
Vue.component('Card', Card);
Vue.component('ScrollPanel', ScrollPanel);
