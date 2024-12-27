<template>
    <div @click="updatePoetry" class="poetry">
        {{ content }}
    </div>
</template>

<script setup>
import { getOneJson, getPoetryToken } from '@/service';
import { usePoetryTokenStore } from '@/stores/poetryToken';
import { ref } from 'vue';



const poetryTokenStore = usePoetryTokenStore()

const poetryToken = poetryTokenStore.poetryToken

const content = ref("")


if(!poetryToken) {
    getPoetryToken().then(res => {
        poetryTokenStore.setPoetryToken(res.data)
    });
}else {
    getOneJson().then(res => {
        console.log(res)
        content.value = res.data.content
    })
    // getInfo().then(res => {
    //     console.log(res)
    // })
    // getPoetrySentence().then(res => {
    //     console.log(res)
    // })
}

const updatePoetry = () => {

    const token = poetryTokenStore.poetryToken;
    if(!token) {
        return;
    }
    getOneJson().then(res => {
        console.log(res)
        content.value = res.data.content
    })
}
</script>

<style scoped>
.poetry {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
}
</style>