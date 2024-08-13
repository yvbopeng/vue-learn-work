<template>
    <div>
        <VueDraggable ref="el" v-model="list">
            <div v-for="item in list" :key="item.id" class="list-item">
                {{ item.name }}
            </div>
        </VueDraggable>
        <br />
        <hr />
        <br />
        <draggable v-model="list" item-key="id">
            <template #item="{element}">
                <div class="list-item">{{element.name}}</div>
            </template>
        </draggable>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import draggable from 'vuedraggable'

const list = ref([
    {
        name: 'Apple',
        id: 1
    },
    {
        name: 'Vita',
        id: 2
    },
    {
        name: 'Cherry',
        id: 3
    },
    {
        name: 'Juan',
        id: 4
    }
])

</script>

<style scoped>
.list-item {
    user-select: none;
    cursor: pointer;
}
</style>