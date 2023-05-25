import * as types from "./Types";

export const loadUsersStart = () => ({
  type: types.LOAD_USER_START,
});

export const loadUsersSuccess = (users) => ({
  type: types.LOAD_USER_SUCESS,
  payload: users,
});

export const loadUsersError = (error) => ({
  type: types.LOAD_USER_ERROR,
  payload: error,
});

export const createUsersStart = (user) => ({
  type: types.CREATE_USER_START,
  payload: user,
});

export const createUsersSuccess = () => ({
  type: types.CREATE_USER_SUCCESS,
});

export const createUsersError = (error) => ({
  type: types.CREATE_USER_ERROR,
  payload: error,
});

export const deleteUsersStart = (userID) => ({
  type: types.DELETED_USER_START,
  payload: userID,
});

export const deleteUsersSuccess = (userID) => ({
  type: types.DELETED_USER_SUCCESS,
  payload: userID,
});

export const deleteUsersError = (error) => ({
  type: types.DELETED_USER_ERROR,
  payload: error,
});

export const updateUsersStart = (userInfo) => ({
  type: types.UPDATE_USER_START,
  payload: userInfo,
});

export const updateUsersSuccess = () => ({
  type: types.UPDATE_USER_SUCCESS,
});

export const updateUsersError = (error) => ({
  type: types.UPDATE_USER_ERROR,
  payload: error,
});
