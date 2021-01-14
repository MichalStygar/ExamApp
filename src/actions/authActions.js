import axios from "axios";

export const addRegister = async (register) =>  {
    try{
    const res = await axios.post(`/api/Auth/Register`,register);
    return res;
    }catch(error){
        console.log(error);
    }
    
}

export const login = async (user) =>  {
    try{
    const res = await axios.post(`/api/Auth/Login`,user);
    const token = res.data.message;
    localStorage.setItem("token",token);
    return res;
    }catch(error){
        console.log(error);
    }
    
}