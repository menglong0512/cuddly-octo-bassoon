<template>
    <div>
        <p>嵌套路由子页面</p>
        <p>数据1: {{input1}}</p>
        <!-- <p>*2: {{comMsg}}</p> -->
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {State} from 'vuex-class'

// @Component 修饰符注明了此类为一个 Vue 组件
@Component
export default class next extends Vue {
    // input1: string = this.$store.state.show
    // input1: string = ''
    @State('show') input1! :string

    created() {
        console.log(this.input1)
    }
}
</script>
