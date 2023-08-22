import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/contactsReducer";
import { filterReducer } from "./filter/filterReducer";
import { userReducer } from "./user/userReducer";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'], 
};

const persistedReducer = persistReducer(persistConfig, userReducer);
export const reducer = combineReducers({
  contacts:contactsReducer,
  filter:filterReducer,
  user: persistedReducer
})