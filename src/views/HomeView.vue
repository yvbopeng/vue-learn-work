<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue'

const imageList = ref([])
function getImageData() {
  fetch('https://www.amiiboapi.com/api/amiibo/?name=z')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      data.amiibo.forEach(amiibo => {
        imageList.value.push({
          src: amiibo.image,
          alt: amiibo.name
        })
      })
    })
}

getImageData()

const isDark = ref(false)

function changeDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}
document.cookie = 'dark=true'


function downLoadImage() {
  const imageUrl = 'https://test-oss.zhuoyuyun.com/gIlmaxKd/formatFile/ba51dced-eaa8-4aa0-8927-52ea3baa29c2_f8dc94ad-fdd5-4bc0-b6a3-49e4de1df2c5.jpg'
  axios({
    method: 'get',
    url: imageUrl,
    responseType: 'blob', // 重要: 指定响应类型为blob  
  })
    .then((response) => {
      // 创建一个blob URL  
      const url = URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement('a');
      link.href = url;
      link.download = 'image.jpg';
      link.click();

      // 如果你想要在页面加载完成后清理这个URL，可以将其保存在某个地方并在之后调用URL.revokeObjectURL(url)  
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
}
</script>

<template>
  <div class="home">
    <input type="file" id="imageInput" accept="image/*" >
    <div class="image-list">
      <!-- <img v-for="image in imageList" :key="image.src" :src="image.src" :alt="image.alt" /> -->
    </div>
    <a href="http://192.168.110.145:3000/get-cookie">aaaaa</a>
    <button @click="changeDark">{{ isDark ? '黑暗' : '普通' }}</button>
    <div class="test aspect-square border-solid border-0.5 border-rose-600">

    </div>
    <div>
      <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" aria-hidden="true"><!-- ... --></svg>
          </span>
        </div>
        <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
        <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer
          space.
        </p>
      </div>
    </div>


    <div
      class="mt-5 ml-5  rounded-[4px] text-[#0CA100] text-center bg-[#e4f5e3] w-[58px] h-[26px] leading-[26px] inline-block text-[12px]  font-sans font-medium">
      已通过</div>


    <button class="bg-[#0CA100] text-white p-x-5 py-2" @click="downLoadImage">下载</button>
  </div>
</template>


<style scoped>
img {
  width: 15px;
  margin-right: 3px;
}

.test {
  width: 30%;
  background-color: rgba(0, 255, 251, 0.465);
  /* aspect-ratio: 1 / 1; */
}
</style>