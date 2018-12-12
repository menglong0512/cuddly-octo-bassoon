import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        show: '12345'
    },
    modules:{
        box:{
            state:{
                uname: '',
                upass: ''
            }
        }
    },
    actions:{},
    mutations:{},
    getters:{}
})
