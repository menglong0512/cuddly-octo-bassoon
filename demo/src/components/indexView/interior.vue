<template>
    <div>
        <span>输入：{{indexOut}}</span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    props: {indexOut: String}
})
export default class interior extends Vue {
    // indexOut: string = ''
}
</script>
