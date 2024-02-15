import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategorie } from "../../API/api";
import MainCard from "../mainCard/MainCard";
import classes from "./Categorie.module.css";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

export const Categorie = () => {
  const paramsID = useParams().id;
  const [categorie, setCategorie] = useState([]);
  console.log(categorie);

  useEffect(() => {
    const fetchCategorie = async () => {
      try {
        const data = await getCategorie(paramsID);
        setCategorie(Object.values(data.data)[4]);
      } catch (error) {
        console.error("Error fetching categorie:", error);
      }
    };

    fetchCategorie();
  }, [paramsID]);

  return (
    <>
      <div>
        <Breadcrumbs />
      </div>
      <div className={classes.wraper}>
        {categorie.map((card) => (
          <MainCard key={card.id} product={card} />
        ))}
      </div>
    </>
  );
};
