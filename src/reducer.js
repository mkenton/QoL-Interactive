import { combineReducers } from "redux";
import usersReducer from "./features/users/usersSlice";
import lessonsReducer from "./features/lessons/lessonsSlice"

export default combineReducers({
  users: usersReducer,
  lessons: lessonsReducer
});
