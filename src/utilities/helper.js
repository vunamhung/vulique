import Vue from "vue";
import _ from "lodash";

const helper = {
    isEmpty(value) {
        return _.isEmpty(value);
    },
};

Vue.prototype.$helper = helper;
