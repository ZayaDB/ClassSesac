//초기값
const initialState = 0;

//action type 정의
//action type count으로 작성하는 이유
//decreament,increament,reset은 다른 state들에서 type으로 사용될 수 있음
//이에 대한 type의 특정을 통해 원하는
export const counterMinus = () => ({ type: "count/decreament" });
export const counterPlus = () => ({ type: "count/increament" });
export const counterReset = () => ({ type: "count/reset" });
export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "count/increament":
      return state + 1;
    case "count/decreament":
      return state - 1;
    case "count/reset":
      return 0;
    default:
      return initialState;
  }
};
