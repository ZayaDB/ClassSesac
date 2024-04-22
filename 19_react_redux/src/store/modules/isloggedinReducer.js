//true false로 관리되는 isLoggedin state

const initialState = false;
export const isLoggedInChange = () => ({ type: "isLoggedin/change" });
export const isLoggedInReducer = (state = initialState, action) => {
  if (action.type === "isLoggedin/change") {
    return !state; //true->false로 false는 true로 state update
  }
  return state;
};
