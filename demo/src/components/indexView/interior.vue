<template>
    <div>
        <p>输入：{{indexOut}}</p>
        <p>{{comOut}}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import Component from 'vue-class-component'
import {Component, Prop} from 'vue-property-decorator'

@Component
export default class interior extends Vue {
    @Prop({default: ''}) indexOut!: string

    get comOut(){
        return `${this.indexOut}${this.indexOut}`
    }
}
</script>
