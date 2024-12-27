import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePoetryTokenStore = defineStore('poetryToken', () => {
  const poetryToken = ref("")


  const setPoetryToken = (token) => {
    poetryToken.value = token
  }

  return { poetryToken, setPoetryToken }
}, {
  persist: true
})
