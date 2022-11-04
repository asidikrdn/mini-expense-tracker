import React, { createContext, useReducer } from "react";
import {
  initialState as inputState,
  inputReducer,
} from "./reducers/inputReducer";
import {
  initialState as saldoState,
  saldoReducer,
} from "./reducers/saldoReducer";
import {
  initialState as trxState,
  transactionReducer,
} from "./reducers/transactionReducer";

export const Context = createContext();

const Store = (props) => {
  const [input, dispatchInput] = useReducer(inputReducer, inputState);
  const [saldo, dispatchSaldo] = useReducer(saldoReducer, saldoState);
  const [transaction, dispatchTransaction] = useReducer(
    transactionReducer,
    trxState
  );

  return (
    <Context.Provider
      value={{
        input,
        dispatchInput,
        saldo,
        dispatchSaldo,
        transaction,
        dispatchTransaction,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Store;
