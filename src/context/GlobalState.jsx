import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  transactions: [{ id: 2, caption: "For Narendra Thackrey", amount: 3000 }],
  informations: [
    {
      id: 1,
      name: "Narendra Thackrey",
      address: "Near Main Street, Worli, NCR, India",
      caption: "He really needs to some sort of shelter, he's really old.",
      members: 1,
    },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  function addInformation(information) {
    dispatch({
      type: "ADD_INFO",
      payload: information,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        informations: state.informations,
        addInformation,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
