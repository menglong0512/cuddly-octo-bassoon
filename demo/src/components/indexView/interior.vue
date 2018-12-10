<template>
    <div>
        <p>输入：{{indexOut}}</p>
        <p>{{comOut}}</p>
        <label>子传父：</label><input type="text" v-model="sonToSuperior" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import Component from 'vue-class-component'
import {Component, Prop, Emit, Watch} from 'vue-property-decorator'
import { watch } from 'fs';

@Component
export default class interior extends Vue {

    sonToSuperior: string = ''

    @Prop({default: 'default value'}) indexOut!: string
    @Prop([String,Boolean]) outArray!: string | boolean

    @Emit()
    resetEmit(val: string = this.sonToSuperior){
        /**
         * 相当于 this.$emit('reset-emit', val);
         */
        return val
    }

    @Watch('sonToSuperior')
    function(val: string, oldVal: string){
        // console.log(val);
        // console.log(oldVal);
        this.resetEmit(val);
    }

    get comOut(){
        return `${this.indexOut}${this.outArray}`
    }
}
</script>
