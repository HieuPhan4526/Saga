import * as types from "./Types";

import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";

import {
  createUsersSuccess,
  deleteUsersSuccess,
  loadUsersError,
  loadUsersSuccess,
  updateUsersSuccess,
} from "./action";

import {
  createUserApi,
  deletedUserApi,
  loadUserApi,
  updateUserAPI,
} from "./api";

function* onLoadUsersStartAsync() {
  try {
    const response = yield call(loadUserApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersError(error.response.data));
  }
}
function* onCreateUsersStartAsync({ payload }) {
  try {
    const response = yield call(createUserApi, payload);
    if (response.status === 201) {
      yield put(createUsersSuccess());
    }
  } catch (error) {
    console.log(error);
  }
}

function* onDeleteUserStartAsync(userID) {
  try {
    const response = yield call(deletedUserApi, userID);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteUsersSuccess(userID));
    }
  } catch (error) {
    console.log(error);
  }
}
function* onUpdateUsersStartAsync({ payload: { id, formValue } }) {
  try {
    const response = yield call(updateUserAPI, id, formValue);
    if (response.status === 200) {
      yield put(updateUsersSuccess());
    }
  } catch (error) {
    console.log(error);
  }
}
function* onLoadUsers() {
  yield takeEvery(types.LOAD_USER_START, onLoadUsersStartAsync);
}

function* onCreateUsers() {
  yield takeLatest(types.CREATE_USER_START, onCreateUsersStartAsync);
}

function* onUpdateUsers() {
  yield takeLatest(types.UPDATE_USER_START, onUpdateUsersStartAsync);
}

function* onDeleteUsers() {
  while (true) {
    const { payload: userID } = yield take(types.DELETED_USER_START);
    yield call(onDeleteUserStartAsync, userID);
  }
}

const userSaga = [
  fork(onLoadUsers),
  fork(onCreateUsers),
  fork(onDeleteUsers),
  fork(onUpdateUsers),
];

export default function* rootSaga() {
  yield all([...userSaga]);
}
