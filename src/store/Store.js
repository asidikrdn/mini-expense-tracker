import React, { createContext, useReducer } from "react";
import { initialInputState, inputReducer } from "./reducers/inputReducer";
import { initialSaldoState, saldoReducer } from "./reducers/saldoReducer";
import {
  initialTrxState,
  transactionReducer,
} from "./reducers/transactionReducer";

export const Context = createContext();

const Store = (props) => {
  const [input, dispatchInput] = useReducer(inputReducer, initialInputState);
  const [saldo, dispatchSaldo] = useReducer(saldoReducer, initialSaldoState);
  const [transaction, dispatchTransaction] = useReducer(
    transactionReducer,
    initialTrxState
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
