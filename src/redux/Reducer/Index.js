import { combineReducers } from "redux";
import TaskReducer from "./Listtask";
const rootReducer = combineReducers({ task: TaskReducer });

export default rootReducer;
