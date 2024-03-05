import axios from "axios";
import toast from "react-hot-toast";

const API = axios.create({ baseURL: "http://localhost:3002" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }
  return req;
});

export async function getProducts() {
  try {
    const response = await API.get("/", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      const data = response.data.data;
      return data;
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getCategorie(id) {
  try {
    const response = await API.get(`/categories/:categorie/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      const data = response.data;
      return data;
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getCategoriesData() {
  try {
    const response = await fetch("http://localhost:3002/categories", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw error;
  }
}

export async function register(data) {
  try {
    const response = await fetch("http://localhost:3002/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem(
        "token",
        JSON.stringify({ user: data.user, token: data.token, role: data.role })
      );
      return data;
    } else {
     throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

export async function login(data) {
  try {
    const response = await fetch("http://localhost:3002/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem(
        "token",
        JSON.stringify({
          user: data.result,
          token: data.token,
          role: data.role,
        })
      );
      console.log(data);
      return data;
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    throw error;
  }
}

export async function removeUser(id) {
  console.log(JSON.stringify(id));
  try {
    const response = await API.delete("/removeUser", {
      headers: { "Content-Type": "application/json" },
      data: { id },
    });
    if (response.status === 200) {
      const data = response.data;
      if (data.message === "User removed successfully") {
        console.log("User removed successfully");
      } else {
        console.warn("Unexpected success response:", data);
      }
    } else {
      const errorData = response.data.message;
      throw new Error(errorData.message || "Failed to remove user");
    }
  } catch (error) {
    console.error("Failed to remove user:", error);
    throw error;
  }
}

export async function sendMessage(id, text, stars, name, categoryID) {
  console.log(categoryID);
  try {
    const response = await API.patch(
      `/rating/${id}`,
      {
        text,
        stars,
        name,
        categoryID
      },
      { headers: { "Content-type": "application/json" } }
    );
    if (response.status === 200) {
      const data = response.data;
      if (data.message === "Success") {
        console.log("Successfuly send message");
        toast.success("Message successfully send.")
      } else {
        console.warn("Unexpected success response:", data);
      }
    } else {
      const errorData = response.data.message;
      throw new Error(errorData.message || "Failed to send message");
    }
  } catch (error) {
    console.error("Failed to send message:", error);
    throw error;
  }
}
