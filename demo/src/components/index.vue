<template>
    <div>
        <div>{{msg}}</div>
        input1: <input type="text" v-model="input1">
        <button @click="lookView">view</button>
        <interior-view :indexOut='input1'></interior-view>

        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import interiorView from './indexView/interior.vue'

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
    components: {interiorView}
})

export default class indexClass extends Vue {
    msg: string = 'Welcome TS'
    input1: string = ''

    lookView() {
        console.log('点了view')
    }

    //钩子
    created() {
        console.log('在模板渲染成html前调用')
    }
    mounted() {
        console.log('在模板渲染成html后调用')
    }
}

</script>
