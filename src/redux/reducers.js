import * as types from "./Types";

const initState = {
  users: [],
  loadding: false,
  error: null,
};

const UsersReducer = (state = initState, action) => {
  switch (action.type) {
    case types.LOAD_USER_START:
    case types.CREATE_USER_START:
    case types.DELETED_USER_START:
    case types.UPDATE_USER_START:
      return {
        ...state,
        loadding: true,
      };

    case types.LOAD_USER_SUCESS:
      return {
        ...state,
        loadding: false,
        users: action.payload,
      };

    case types.DELETED_USER_SUCCESS:
      return {
        ...state,
        loadding: false,
        users: state.users.filter((item) => item.id !== action.payload),
      };

    case types.CREATE_USER_SUCCESS:
    case types.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loadding: false,
      };

    case types.LOAD_USER_ERROR:
    case types.CREATE_USER_ERROR:
    case types.DELETED_USER_ERROR:
    case types.UPDATE_USER_ERROR:
      return {
        ...state,
        loadding: false,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default UsersReducer;
