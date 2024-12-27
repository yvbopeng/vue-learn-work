import { usePoetryTokenStore } from "@/stores/poetryToken";
import axios from "axios";



const poetryTokenStore = usePoetryTokenStore()

const corsUrl = "/poetry-cors"
const poetryUrl = "https://v2.jinrishici.com"
console.log('env.MODE: ', import.meta.env.MODE)
const baseURL = import.meta.env.MODE === "development" ? corsUrl : poetryUrl
const instance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    // "X-User-Token": poetryTokenStore.poetryToken,
  },
});


instance.interceptors.response.use(
  (response) => {
    return response.data;
  }
)

export const getPoetryToken = () => {
    return instance.get('/token')
}

export const getInfo = () => {
    return instance.get('/info')
}

export const getPoetrySentence = () => {
    return instance.get('/sentence')
}


export const getOneJson = () => {
    return instance.get('/one.json?client=npm-sdk/1.0')
}