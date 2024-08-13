<template>
    <div class="test">
        <p>color</p>
        <p class="light">light</p>
        <p class="dark">dark</p>
        <p class="brand-next">brand-next</p>
        <v-stage :config="configKonva" @mousedown="handleStageMouseDown">
            <v-layer>
                <v-circle :config="configCircle"></v-circle>
                <v-text @dragstart="handleDragStart" @dragend="handleDragEnd" :config="{
                    text: 'Draggable Text',
                    x: 50,
                    y: 50,
                    fontSize: 24,
                    draggable: true,
                    strokeWidth: 5,
                    fill: isDragging ? 'green' : 'black'
                }" />
            </v-layer>


            <v-layer ref="layer">
                <v-rect v-for="item in rectangles" :key="item.id" :config="item" @transformend="handleTransformEnd" @dragend="rectDragEnd"/>
                <v-transformer ref="transformer" />
            </v-layer>
        </v-stage>
    </div>

</template>
<script setup>
import { ref } from 'vue'
import Konva from 'konva';
document.documentElement.classList.add('rainbow')


const configKonva = ref({
    width: 500,
    height: 500
})

const configCircle = ref({
    x: 100,
    y: 100,
    radius: 70,
    fill: "blue",
    stroke: "black",
    strokeWidth: 1
})

const isDragging = ref(false)

function handleDragStart() {
    isDragging.value = true
}

function handleDragEnd() {
    isDragging.value = false
}

const selectedShapeName = ref('')
const transformer = ref(null)
const rectangles = ref([
    {
        rotation: 0,
        x: 10,
        y: 10,
        width: 100,
        height: 100,
        scaleX: 1,
        scaleY: 1,
        fill: 'red',
        name: 'rect1',
        draggable: true,
    },
    {
        rotation: 0,
        x: 150,
        y: 150,
        width: 100,
        height: 100,
        scaleX: 1,
        scaleY: 1,
        fill: 'green',
        name: 'rect2',
        draggable: true,
    },
])

function updateTransformer() {
    console.log('updateTransformer')
    // here we need to manually attach or detach Transformer node
    const transformerNode = transformer.value.getNode();
    const stage = transformerNode.getStage();

    const selectedNode = stage.findOne('.' + selectedShapeName.value);
    // do nothing if selected node is already attached
    if (selectedNode === transformerNode.node()) {
        return;
    }

    if (selectedNode) {
        // attach to another node
        transformerNode.nodes([selectedNode]);
    } else {
        // remove transformer
        transformerNode.nodes([]);
    }
}

function handleTransformEnd(e) {
    console.log('handleTransformEnd')
    // shape is transformed, let us save new attrs back to the node
    // find element in our state
    const rect = rectangles.value.find(
        (r) => r.name === selectedShapeName.value
    );
    // update the state
    rect.x = e.target.x();
    rect.y = e.target.y();
    rect.rotation = e.target.rotation();
    rect.scaleX = e.target.scaleX();
    rect.scaleY = e.target.scaleY();

    // change fill
    rect.fill = Konva.Util.getRandomColor();
}

function rectDragEnd(e) {
    console.log('rectDragEnd')
    const rect = rectangles.value.find(
        (r) => r.name === selectedShapeName.value
    );
    rect.x = e.target.x();
    rect.y = e.target.y();
    rect.rotation = e.target.rotation();
    rect.scaleX = e.target.scaleX();
    rect.scaleY = e.target.scaleY();
}

function handleStageMouseDown(e) {
    console.log('handleStageMouseDown')
    // clicked on stage - clear selection
    if (e.target === e.target.getStage()) {
        selectedShapeName.value = ""
        updateTransformer();
        return;
    }

    // clicked on transformer - do nothing
    const clickedOnTransformer =
        e.target.getParent().className === 'Transformer';
    if (clickedOnTransformer) {
        return;
    }

    // find clicked rect by its name
    const name = e.target.name();
    const rect = rectangles.value.find((r) => r.name === name);
    if (rect) {
        selectedShapeName.value = name;
    } else {
        selectedShapeName.value = ""
    }
    updateTransformer();
}



</script>

<style lang="css" scoped>
* {
    box-sizing: border-box;
}

.test {
    width: 100%;
    height: 100vh;
}

p {
    color: var(--vp-c-brand-1);
    transition: color .25s, opacity .25s;
    /* text-decoration: underline;
    text-underline-offset: 2px; */
    font-size: 40px;
}

.light {
    color: var(--vp-c-brand-light);
    font-size: 40px;
}

.dark {
    color: var(--vp-c-brand-dark);
    font-size: 40px;
}
.brand-next {
    color: var(--vp-c-brand-next);
    font-size: 40px;
}

</style>