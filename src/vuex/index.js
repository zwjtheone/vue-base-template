import Vue from "vue";
import Vuex from "vuex";
import createLogger from 'vuex/dist/logger';
import createPersistedState from 'vuex-persistedstate'; // 状态持久化插件

import modules from "./modules";

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules,
    strict: debug,
    plugins: debug ? [createLogger(), createPersistedState()] : [createPersistedState()]
});
