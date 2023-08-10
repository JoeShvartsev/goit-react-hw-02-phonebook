import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/contactsReducer";
import { filterReducer } from "./filter/filterReducer";

export const reducer = combineReducers({
  contacts:contactsReducer,
  filter:filterReducer
})