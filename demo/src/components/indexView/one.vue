<template>
    <div>
        子页面
        数据1: {{indexMsg}}
    </div>
</template>

<script lang="ts">
/* eslint-disable */
import Vue from 'vue'
import Component from 'vue-class-component'

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({})
export default class indexText extends Vue {
    indexMsg: string = 'no'

}
</script>
