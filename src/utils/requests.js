import axios from "axios";
import { baseUrl } from "./constants";

export const signUp = async (registerdetails) => {
  let response = await axios.post(baseUrl + "/signup", registerdetails);
  return response;
};

export const login = async (logindetails) => {
  let response = await axios.post(baseUrl + "/login", logindetails);
  if (response.token) localStorage.setItem("token", response.token);
  return response;
};

export const getProfileDetails = async () => {
  const bearer = "Bearer " + localStorage.getItem("token");
  console.log(bearer);
  let response = await axios.get(baseUrl + "/user", {
    headers: {
      Authorization: bearer,
      "Access-Control-Allow-Headers": "access-control-allow-origin",
    },
  });
  console.log(response);
  return response.data;
};

export const getDistricts = async () => {
  let response = await axios.get(baseUrl + "/districts");
  return response;
};

export const getStates = async () => {
  let response = await axios.get(baseUrl + "/states");
  return response;
};

export const getSoil = async () => {
  let response = await axios.get(baseUrl + "/soils");
  return response;
};
