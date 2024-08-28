<template>
    <div>
        <p class="title">P标签测试</p>
        <canvas id="container" width="400" height="400"></canvas>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
    const myFont = new FontFace('楷体_GB2312', 'url("./kai_GB2312.ttf")');
    myFont.load().then(function (loadedFont) {
        document.fonts.add(loadedFont);
    }).then(() => {
        const canvas = document.getElementById('container');
        const ctx = canvas.getContext('2d');

        // 设置字体  
        ctx.font = 'normal 50px 楷体_GB23';
        // ctx.font = 'normal 50px Microsoft YaHei'; 
        ctx.fillStyle = 'black';

        // 绘制文本  
        ctx.fillText('Canvas测试', 0, 40);
    })

    // const canvas = document.getElementById('container');
    // const ctx = canvas.getContext('2d');

    // // 设置字体  
    // ctx.font = 'bold 50px 楷体_GB23';
    // ctx.fillStyle = 'black';

    // // 绘制文本  
    // ctx.fillText('Canvas测试', 0, 40);

})
</script>

<style scoped>
.title {
    font-size: 50px;
    color: black;
    font-family: "楷体_GB23";
}
</style>