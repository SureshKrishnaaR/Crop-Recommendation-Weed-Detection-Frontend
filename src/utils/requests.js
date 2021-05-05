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

export const predictCrop = async (district) => {
  let response = await axios.get(
    baseUrl + `/A1/recommendCrop?district=${district}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  console.log(response);
  return response.data;
};

export const predictNpk = async (crop, district) => {
  let response = await axios.post(
    baseUrl + `/A1/recommendNPK?district=${district}`,
    { crop: crop.toLowerCase() },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};

export const predictFertilizer = async (reqdetails, district) => {
  console.log(reqdetails);
  let response = await axios.post(
    baseUrl + `/A1/recommendFertilizer?district=${district}`,
    reqdetails,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};

export const predictCropApp2 = async (npkValues, district) => {
  let response = await axios.post(
    baseUrl + `/A2/recommendCrop?district=${district}`,
    npkValues,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};

export const getWeatherDetails = async (district) => {
  let response = await axios.get(
    baseUrl + `/weather?district_name=${district}`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};

export const getSeasons = async () => {
  let response = await axios.get(baseUrl + `/seasons`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const predictCropYield = async ({
  state,
  district,
  crop,
  season,
  area,
}) => {
  let response = await axios.post(
    baseUrl +
      `/recommendCropYield?state=${state}&district=${district.toUpperCase()}&season=${season}`,
    { crop: crop[0].toUpperCase() + crop.slice(1), area: area },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response.data;
};

export const getSeasonbyMonth = async () => {
  let response = await axios.get(baseUrl + `/getSeasonbyMonth`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const weedDetection = async (imageURI) => {
  let response = await axios.post(baseUrl + `/weedDetection`, { imageURI });
  return response.data;
};
