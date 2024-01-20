import axios from "axios";

const API = axios.create({baseURL: "http://localhost:3002"});

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

