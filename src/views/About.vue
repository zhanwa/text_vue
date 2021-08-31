<!--
 * @Description: 
 * @Autor: zhangzhanhua
 * @Date: 2021-07-06 09:53:29
 * @LastEditors: zhangzhanhua
 * @LastEditTime: 2021-07-06 16:07:21
-->
<template>
    <div class="about">
        <h1>{{name}}</h1>
        <h1>{{age}}</h1>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    name: 'about',
    inject: ['user'],
    mounted() {
        console.log(this.plusOne);
    },
    data() {
        return {
            // name: '1111'
        }
    },
    setup() {
        const name = ref('小四')
        const age = ref(18)
        function plusOne() {
            age.value++ //想改变值或获取值 必须.value
        }
        return { //必须返回 模板中才能使用
            name,
             age, plusOne
        }
    }
}
</script>

