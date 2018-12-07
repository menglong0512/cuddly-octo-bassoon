<template>
    <div>
        子页面
        <!-- <p>数据1: {{input1}}</p> -->
        <!-- <p>*2: {{comMsg}}</p> -->
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({})
export default class next extends Vue {
    input1: string = ''

    
}
</script>
