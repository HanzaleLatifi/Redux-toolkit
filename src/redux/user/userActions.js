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
    axios.get("https://jsonplaceholder.typicode.com/users"),
      then((res) => {
        usersId = res.map((user) => user.id);
        dispatch(fetchUsersSuccess(usersId));
      }).catch((error) => {
        dispatch(fetchUsersFailure(error));
      });
  };
};
