import React, { useState, useEffect } from "react";
import SoilTypeView from "./soiltype.view";
import { getSoil } from "../../../../../../utils/requests";

const SoilType = ({ profiledetails, handleChange }) => {
  //states
  const [soil, setSoil] = useState([]);

  useEffect(() => {
    getSoil()
      .then((res) => {
        let resp = [];
        for (let i in res.data) {
          resp.push(res.data[i]);
        }
        setSoil(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <SoilTypeView
        profiledetails={profiledetails}
        soil={soil}
        handleChange={handleChange}
      />
    </>
  );
};

export default SoilType;
