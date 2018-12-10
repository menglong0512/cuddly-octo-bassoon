<template>
    <div>
        <div>{{msg}}</div>
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
import interiorView from './indexView/interior.vue'

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
    components: {interiorView},
    props:{proVal:String}
})

export default class indexClass extends Vue {
    msg: string = 'Welcome TS'
    input1: string = ''

    lookView(): void {
        console.log(this.input1);
    }

    parentMethod(val: string): void {
        console.log(`index.uve -> ${val}`);
    }

    //钩子
    created() {
        console.log('在模板渲染成html前调用');
    }
    mounted() {
        console.log('在模板渲染成html后调用');
    }

    // 计算属性，相当与computed
    get comMsg(){
        return `${this.input1}+${this.input1}`
    }
}

</script>
