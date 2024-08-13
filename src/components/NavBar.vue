<template>
    <div>
        <RouterLink :to="item.path" v-for="item in routerList" :key="item.path">
            {{ item.name }}
        </RouterLink>
    </div>
</template>

<script setup>
import allRouter from "../router/index.js";
import { ref } from "vue";

console.log('navbar', allRouter.getRoutes())
const routerList = ref([])

allRouter.getRoutes().forEach(item => {
        routerList.value.push(item)
})
</script>