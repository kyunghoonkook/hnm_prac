const initialState = {
  id: "",
  password: "",
  autheticate: false,
};

function autheticateReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        autheticate: true,
      };
    default:
      return { ...state };
  }
}

export default autheticateReducer;
