import Vue from "vue";
import App from "./App";

import "@/components/ui";
import "@/plugins";
import "@/utilities";
import "@/icons";
import "@/assets/scss/style.scss";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount("#app");
