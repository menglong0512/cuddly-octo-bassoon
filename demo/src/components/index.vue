<template>
    <div>
        <div>{{vuexUname}}</div>
        input1: <input type="text" v-model="input1">
        <p>{{comMsg}}</p>
        <button @click="lookView">view</button>
        <interior-view :indexOut='input1' @reset-emit='parentMethod'></interior-view>

        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {State}  from 'vuex-class'

import interiorView from './indexView/interior.vue'
import { basis } from '../basis/Basis';
import serUrl from '../basis/site';

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
    components: {interiorView},
    props:{proVal:String}
})

export default class index extends Vue {
    input1: string = '';

    @State(state => state.box.uname) vuexUname!:string;

    async lookView() {
        // console.log(this.input1);
        let xxx = await basis().SEQAjax('POST','/merchants/loginPlatform',{'q':'词语'});
        console.log(xxx);
    }

    // 接受子页面发送的数据
    parentMethod(val: string): void {
        console.log(`index.uve -> ${val}`);
    }

    //钩子
    created() {
        console.log('在模板渲染成html前调用');
    }
    mounted() {
        console.log(this.vuexUname);
    }

    // 计算属性，相当与computed
    get comMsg(){
        return `${this.input1}+${this.input1}`;
    }
}

</script>
