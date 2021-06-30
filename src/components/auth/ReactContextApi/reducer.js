//how data layer looks before we add data to the data layer
export const initialState = {
  isLoggedIn: null,
  userName: null,
  usePhone: null,
  userRole: null,
  userId: null,
  layer: null,
};

//push data in the data layer
// export const actionTypes = {
//     SET_USER:'SET_USER'
// }

const reducer = (state, action) => {
  console.log(action);
  switch (action.types) {
    case "SET_USER":
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        userName: action.userName,
        userPhone: action.userPhone,
        userRole: action.userRole,
        userId: action.userId,
      };

    case "ADD_PG":
      return {
        ...state,
      };
    case "ABOUT_LAYER":
      return {
        ...state,
        layer: action.layer,
      };
    default:
      return state;
  }
};

export default reducer;
