//built in modules
import React, { useState, useEffect } from "react";

//component files
import DistrictView from "./district.view";

//import requests
import { getDistricts } from "../../../../../../utils/requests";

const District = ({ profiledetails, handleChange }) => {
  //states
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    getDistricts(profiledetails.state_name)
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
  }, [profiledetails.state_name]);

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
