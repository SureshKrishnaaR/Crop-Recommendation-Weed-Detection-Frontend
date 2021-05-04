//built in modules
import React, { useState, useEffect } from "react";

//component files
import StateView from "./state.view";

//import requests
import { getStates } from "../../../../../../utils/requests";

const State = ({ profiledetails, handleChange }) => {
  //states
  const [states, setStates] = useState([]);

  useEffect(() => {
    getStates()
      .then((res) => {
        let resp = [];
        for (let i in res.data) {
          resp.push(res.data[i]);
        }
        setStates(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <StateView
        profiledetails={profiledetails}
        handleChange={handleChange}
        states={states}
      />
    </>
  );
};

export default State;
