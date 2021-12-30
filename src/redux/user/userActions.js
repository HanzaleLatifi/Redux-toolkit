import axios from "axios";
function fetchUsersRequest() {
  return {
    type: "FETCH_USERS_REQUEST",
  };
}

function fetchUsersSuccess(data) {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: data,
  };
}
function fetchUsersFailure(error) {
  return {
    type: "FETCH_USERS_FAILURE",
    payload: error,
  };
}

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data;
        dispatch(fetchUsersSuccess(users));
      }).catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
