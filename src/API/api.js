import axios from "axios";

const API = axios.create({baseURL: "http://localhost:3002"});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem("user")){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("user")).token}`
    }
    return req;
})

export async function getProducts () {
    try {
        const response = await API.get("/",{
            headers: {
                "Content-Type": "application/json"
            }
        });
        if(response.status === 200) {
            const data = response.data.data
            return data;
        }
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error
    }
}

export async function getCategorie(id) {
    try {
        const response = await API.get(`/categories/:categorie/${id}`,{
            headers: {
                "Content-Type": "application/json"
            }
        });
        if(response.status === 200) {
            const data = response.data;
            return data;
        }
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error
    }
}

export async function getCategoriesData() {
    try {
        const response = await fetch("http://localhost:3002/categories",{
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
            const data = await response.json();
            return data.data;
    } catch (error) {
        throw error;
    }
}

export async function register(data) {
    try {
        const response = await fetch("http://localhost:3002/register",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        if(response.ok){
            const data = await response.json();
            console.log(data);
            localStorage.setItem('token', JSON.stringify({ user:data.user, token:data.token, role:data.role}))
            console.log(data);
            return data;
        }else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
           
    } catch (error) {
        throw error;
    }
}

export async function login(data) {
    try {
        const response = await fetch("http://localhost:3002/login",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        if(response.ok){
            const data = await response.json();
            localStorage.setItem('token', JSON.stringify({user:data.result, token:data.token, role:data.role}))
            console.log(data);
            return data;
        }else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
           
    } catch (error) {
        throw error;
    }
}



