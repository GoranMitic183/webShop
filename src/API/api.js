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

// export async function getProducts() {
//     try {
//         const response = await fetch("http://localhost:3002", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//         });

//         if (response.ok) {
//             const data = await response.json();
//             console.log(data);
//             return data.data;
//         } else {
//             throw new Error(`Error fetching products. Status: ${response.status}`);
//         }
//     } catch (error) {
//         console.error("Error fetching products:", error);
//         throw error;
//     }
// }
