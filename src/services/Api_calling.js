import axios from "axios";
const baseUrl = process.env.REACT_APP_baseUrl;

const authToken = localStorage.getItem("authToken");

const headers = {
  Authorization: "Bearer " + authToken, //the token is a variable which holds the token
};

const postRequest = async (path, data) => {
  let res = {
    success: false,
    msg: "Something went wrong, please try again later",
  };
  try {
    const response = await axios({
      method: "POST",
      url: `${baseUrl}${path}`,
      data,
      headers,
    });
    res = response.data;
  } catch (err) {
    res.msg = err.response?.data.msg || err.message;
    return res;
  }
  return res;
};

const deleteRequest = async (path, data) => {
  let res = {
    success: false,
    message: "Something went wrong, please try again later",
  };

  try {
    const response = await axios({
      method: "DELETE",
      url: `${baseUrl}${path}`,
      data,
    });
    res = response.data;
  } catch (err) {
    console.log(err);
    res.message = err.message;
    return res;
  }
  return res;
};

const putRequest = async (path, data) => {
  let res = {
    success: false,
    msg: "Something went wrong, please try again later",
  };

  try {
    const response = await axios({
      method: "PUT",
      url: `${baseUrl}${path}`,
      data,
      headers,
    });
    res = response.data;
  } catch (err) {
    res.msg = err.response?.data.msg || err.message;
    return res;
  }
  return res;
};

const getRequest = async (path) => {
  let res = {
    success: false,
    msg: "Something went wrong, please try again later",
  };

  try {
    const response = await axios({
      method: "GET",
      url: `${baseUrl}${path}`,
      // params: data,
      headers,
    });
    res = response.data;
  } catch (err) {
    res.msg = err.response?.data.msg || err.message;
    return res;
  }
  return res;
};

export const login = async (data) => {
  const path = "/admin/auth/login";
  return await postRequest(path, data);
};

export const getAllClients = async () => {
  const path = "/admin/client/getAllClients";
  return await getRequest(path);
};

export const getAllStackedNftsOfClient = async (clientId) => {
  const path = `/admin/client/getAllStakedNFTs/${clientId}`;
  return await getRequest(path);
};

export const getAllCdcTokenLogicsByClientId = async (clientId) => {
  const path = `/admin/cdc/getAllCdcTokenLogics/${clientId}`;
  return await getRequest(path);
};

export const createCdcTokenLogic = async (data) => {
  const path = "/admin/cdc/createCdcTokenLogic";
  return await postRequest(path, data);
};

export const updateCdcTokenLogic = async (data, id) => {
  const path = `/admin/cdc/updateCdcTokenLogic/${id}`;
  return await putRequest(path, data);
};

