const initialState = 0;

export const deposit = (payload) => ({ type: "money/deposit", payload });
export const withdraw = (payload) => ({ type: "money/withdraw", payload });
export const counterReset = () => ({ type: "money/reset" });
export const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case "money/deposit":
      return state + action.payload;
    case "money/withdraw":
      return state - action.payload;
    default:
      return state;
  }
};
