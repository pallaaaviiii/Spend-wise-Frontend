import axios from "axios";

const BACKEND_URL = "https://spend-wise-backend-rho.vercel.app/api"

export const createuser = async (user) =>{
    const response =await axios.post(`${BACKEND_URL}/createuser`,user)
    if(response){
        return response
    }
}

export const userSign = async (user) =>{
    const response =await axios.post(`${BACKEND_URL}/userSign`,user)
    if(response){
        return response
    }
}

export const getUser = async (id) =>{
    const response =await axios.post(`${BACKEND_URL}/getUser`,id)
    if(response){
        return response
    }
}