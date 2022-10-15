// Menggabungkan beberapa reducer menjadi satu
import { combineReducers } from "redux";
import expenseReducer from "./expenseReducer";

// Untuk sementara, kita baru memiliki 1 reducer, yaitu expenseReducer
export default combineReducers({ expenseReducer });
