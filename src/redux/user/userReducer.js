const initialState = {
  loading: false,
  error: "",
  data: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST": {
      return { ...state, loading: true };
    }
    case "FETCH_USERS_SUCCESS": {
      return { loading: false, error: "", data: action.payload };
    }
    case "FETCH_USERS_FAILURE": {
        return {loading:false , error:action.payload , data :[]}
    }
    default : return state
  }
};

export default userReducer;
