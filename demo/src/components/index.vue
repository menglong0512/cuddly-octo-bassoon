<template>
    <div>
        <span>{{msg}}</span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({})
export default class indexText extends Vue {
    msg: string = 'Welcome TS'
}

</script>
