<template>
    <div class="about">
        <div class="table-wrap">

            <div class="list-warp">
                <table>
                    <tr>
                        <th class="col-0"></th>
                        <th class="col-1">题块名称</th>
                        <th class="col-2">题目名称</th>
                        <th class="col-3">Name</th>
                        <th class="col-4">444</th>
                        <th class="col-4-5">评阅方式</th>
                        <th class="col-5">d</th>
                    </tr>
                </table>
                <VueDraggable v-model="myArray">
                    <div class="list-item" v-for="element in myArray" :key="element.id">
                        <table>
                            <tr v-for="(child, index) in element.children" :key="index">
                                <td :rowspan="element.children.length" class="col-0" v-if="index === 0">
                                    <IconDrag />
                                </td>
                                <td :rowspan="element.children.length" class="col-1" v-if="index === 0">{{ element.name
                                    }}</td>
                                <td class="col-2"> {{ child.questionName }}</td>
                                <td class="col-3">{{ element.name }} - {{ element.id }}</td>
                                <td class="col-4">44444</td>
                                <td :rowspan="element.children.length" v-if="index === 0" class="col-4-5">{{
                                    element.reviewMethod }}
                                </td>
                                <td class="col-5">d</td>
                            </tr>
                        </table>
                    </div>
                </VueDraggable>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import { VueDraggable } from 'vue-draggable-plus'
import IconDrag from '~icons/icon-park/drag'

const myArray = ref([
    {
        id: 1, name: '13-15', reviewMethod: '单评',
        children: [
            { questionName: '13' },
            { questionName: '14' },
            { questionName: '15' }
        ]
    },
    {
        id: 2, name: '18', reviewMethod: '单评', children: [
            { questionName: '18' }
        ]
    },
    {
        id: 3, name: '19', reviewMethod: '双评', children: [
            { questionName: '19' }
        ]
    },
    { id: 4, name: '20', reviewMethod: '双评', children: [{ questionName: '20' }] },
    { id: 5, name: '21', reviewMethod: '单评', children: [{ questionName: '21' }] },
    { id: 6, name: '22', reviewMethod: '双评', children: [{ questionName: '22' }] },
    { id: 7, name: '23', reviewMethod: '单评', children: [{ questionName: '23' }] },
])

</script>

<style scoped>
.table-wrap {
    overflow-x: auto;
    margin: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}

th,
td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
}

th {
    background-color: #f8f8f8;
    font-weight: bold;
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}

tr:hover {
    /* background-color: #f1f1f1; */
}

.item-tr {
    cursor: move;
}

.col-0 {
    width: 5%;
}

/* 设置每列的宽度 */
.col-1 {
    width: 20%;
}

.col-2 {
    width: 15%;
}

.col-3 {
    width: 20%;
}

.col-4-5 {
    width: 15%;
}

.col-4 {
    width: 10%;
}

.col-5 {
    width: 15%;
}

.list-warp {
    border-top: 1px solid #ddd;
    border-left: 1px solid #ddd;
}
</style>