// Menggabungkan beberapa reducer menjadi satu
import { combineReducers } from "redux";
import transactionReducer from "./transactionReducer";
import saldoReducer from "./saldoReducer";
import inputReducer from "./inputReducer";

// Untuk sementara, kita baru memiliki 1 reducer, yaitu transactionReducer
export default combineReducers({
  transactionReducer,
  saldoReducer,
  inputReducer,
});
