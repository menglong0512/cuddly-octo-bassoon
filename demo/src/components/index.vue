<template>
    <div>
        <span>{{msg}}</span>
        input1: <input type="text" v-model="input1">
        <button v-on:click="lookView">view</button>
        <template></template>
    </div>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from 'vue'
import Component from 'vue-class-component'

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({})
export default class indexClass extends Vue {
    msg: string = 'Welcome TS'
    input1: string = ''

    lookView = () => {
        console.log('lookView')
    }
}

</script>
