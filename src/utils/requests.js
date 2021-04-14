import axios from "axios";
import { baseUrl } from "./constants";

export const signUp = async (registerdetails) => {
  let response = await axios.post(baseUrl + "/signup", registerdetails);
  return response.data;
};

export const login = async (logindetails) => {
  let response = await axios.post(baseUrl + "/login", logindetails);
  localStorage.setItem("token", response.data.token);
  return response.data;
};

export const getProfileDetails = async () => {
  let response = await axios.get(baseUrl + "/user", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const getDistricts = async (state) => {
  let response = await axios.get(baseUrl + `/districts?state_name=${state}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
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

export const updateProfile = async (profileDetails) => {
  let response = await axios.put(baseUrl + "/user/update", profileDetails, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};
