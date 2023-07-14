import {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";
import {ACTION_TYPES} from "../Actions/ActionTypes";

const initialState = {
    transactions: [
        {id: 1, text: 'coke', amount: -23},
        {id: 2, text: 'salary', amount: 200},
        {id: 3, text: 'icecream', amount: -10},
        {id: 4, text: 'sidejob', amount: 100},
    ],
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children}) => {
    const [state ,dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch(
            {
                type: ACTION_TYPES.DELETE_TRANSACTION,
                payload: id
            }
        )
    }
    function addTransaction(transaction) {
        dispatch(
            {
                type: ACTION_TYPES.ADD_TRANSACTION,
                payload: transaction
            }
        )
    }
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }} >
        {children}
    </GlobalContext.Provider>
    )
}

