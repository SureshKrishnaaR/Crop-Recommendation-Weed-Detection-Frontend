import React, { useState, useEffect } from "react";
import DistrictView from "./district.view";
import { getDistricts } from "../../../../../../utils/requests";

const District = ({ profiledetails, handleChange }) => {
  //states
  const [districts, setDistricts] = useState([]);

  //handlers

  useEffect(() => {
    getDistricts()
      .then((res) => {
        let resp = [];
        for (let i in res.data) {
          resp.push(res.data[i]);
        }
        setDistricts(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <DistrictView
        profiledetails={profiledetails}
        handleChange={handleChange}
        districts={districts}
      />
    </>
  );
};

export default District;
