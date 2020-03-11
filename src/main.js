import Vue from "vue";
import App from "./App.vue";
import VueFeather from "vue-feather";
import BootstrapVue from "bootstrap-vue";

import VueFlatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import "@/utilities/focusRing";

import "@/assets/scss/style.scss";

Vue.use(BootstrapVue);
Vue.use(VueFeather);
Vue.use(VueFlatPickr);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount("#app");
