import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/contactsReducer";
import { filterReducer } from "./filter/filterReducer";
import { userReducer } from "./user/userReducer";

export const reducer = combineReducers({
  contacts:contactsReducer,
  filter:filterReducer,
  user: userReducer
})