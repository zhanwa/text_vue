<!--
 * @Description: 
 * @Autor: zhangzhanhua
 * @Date: 2021-07-06 09:53:29
 * @LastEditors: zhangzhanhua
 * @LastEditTime: 2021-07-08 14:26:33
-->
<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <div v-for="(item,index) in forList" :key="index"> {{item}}-{{count}}</div>
        <button @click="add(count)">jiaaaa</button>
        <button @click="push(count)">push</button>
        <button @click="downLoad">下载</button>
    </div>
</template>

<script>
import { ref, reactive, toRefs, watch, onMounted } from 'vue'

export default {
    setup() {
        const state = reactive({
            count: 1,
        })
        const forList = ref([1, 2, 3])
        const add = (n) => {
            state.count += n
        }
        const push = (n) => {
            console.log(forList.value);
            forList.value = JSON.parse(JSON.stringify(forList.value.push(n)))
            console.log(forList.value);
        }
        const downLoad = () => {

            window.open('http://www.zzwa.top:2021/public/sed.xlsx', '_self')
        }
        watch(() => state.count, (nv, ov) => {
            console.log(nv, ov);
        })
        onMounted(() => {
            // console.log(Array.from(new Array(100).keys()));
            console.log(Array.from({ length: 1000 }));
        })
        return {
            ...toRefs(state),
            forList,
            add,
            push,
            downLoad
        }
    }
}
</script>
