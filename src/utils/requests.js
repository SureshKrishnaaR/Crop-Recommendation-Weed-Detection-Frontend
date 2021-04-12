import axios from "axios";
import { baseUrl } from "./constants";

export const signUp = async (registerdetails) => {
  let response = await axios.post(baseUrl + "/signup", registerdetails);
  console.log(response);
  alert(response.data.message);
  localStorage.setItem("token", response.data.token);
  return response;
};

export const login = async (logindetails) => {
  let response = await axios.post(baseUrl + "/login", logindetails);
  console.log(JSON.stringify(response.data));
  localStorage.setItem("token", response.data.token);
  return response;
};

export const getProfileDetails = async () => {
  let response = await axios.get(baseUrl + "/user", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  console.log(response.data);
  return response.data;
};

export const getDistricts = async () => {
  let response = await axios.get(baseUrl + "/districts", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  console.log(response);
  return response;
};

export const getStates = async () => {
  let response = await axios.get(baseUrl + "/states", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};

export const getSoil = async () => {
  let response = await axios.get(baseUrl + "/soils", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response;
};
