<template>
    <div>
        name: <input type="text" v-model="uname" />
        password: <input type="password" v-model="upass" />
        <button @click="login">login</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
})

export default class indexClass extends Vue {

    uname: string = ''
    upass: string = ''

    login() {
        this.$router.push('/index')
    }
}

</script>
