import React from "react";
import MainCard from "../mainCard/MainCard";
import classes from "./Latest.module.css";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const Latest = () => {

  const products = useLoaderData()

  return (
    <div className={classes.wraper}>
      <h2>LATEST</h2>
      <MainCard products={products} />
    </div>
  );
};

export default Latest;

export async function loader() {
  const URL = "http://localhost:3000/";
  try {
    const products = await axios.get(URL);
    if (products.status === "ok") {
      return products.data;
    }
    return products.message;
  } catch (error) {
    throw error;
  }
}
