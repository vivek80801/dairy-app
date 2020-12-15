import { combineReducers } from "redux";
import { noteReducer } from "./notReducer";

const rootReducer = combineReducers({ noteReducer });

export default rootReducer;
