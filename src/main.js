import 'babel-polyfill'

import './global-components'

import Vue from 'vue'
import AppLayout from './components/AppLayout.vue'
import router from './router'
import VueFetch, { $fetch } from './plugins/fetch'
import VueState from './plugins/state';
import state from './state';
import * as filters from './filters'

for (const key in filters){
    Vue.filter(key, filters[key])
}

Vue.use(VueFetch, {
    baseUrl: 'http://localhost:3000/',
})

Vue.use(VueState, state)

async function main (){
    // get user info
    try {
        state.user = await $fetch('user')
    } catch (e) {
        console.warn(e)
    }

    // launch app
    new Vue({
        el:"#app",
        data: state,
        router,  
        render: h => h(AppLayout),     
    })
}


main()
