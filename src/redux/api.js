import axios from "axios";

export const loadUserApi = async () =>
  await axios.get("http://localhost:5000/users");

export const createUserApi = async (user) =>
  await axios.post("http://localhost:5000/users", user);

export const deletedUserApi = async (userID) =>
  await axios.delete(`http://localhost:5000/users/${userID}`);

export const updateUserAPI = async (userID, userInfo) =>
  await axios.put(`http://localhost:5000/users/${userID}`, userInfo);
