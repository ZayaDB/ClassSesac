// 여러 개의 reducer 묶어 주기

import { combineReducers } from "@reduxjs/toolkit";
// import { countReducer } from "./modules/countReducer";
import { isLoggedInReducer } from "../store/modules/isloggedinReducer";
import { bankReducer } from "./modules/bankReducer";
import countReducer from "./modules/countSlice";

//combineReducers: 여러 개의 reducer 하나로 묶어줌
const rootReducer = combineReducers({
  count: countReducer,
  isLoggedin: isLoggedInReducer,
  money: bankReducer,
});

export default rootReducer;
