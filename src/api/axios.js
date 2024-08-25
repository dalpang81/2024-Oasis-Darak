import axios from "axios";

const instance = axios.create({
  baseURL: "",
  params: {
    api_key:"",
    language: "ko-KR"
  }
})