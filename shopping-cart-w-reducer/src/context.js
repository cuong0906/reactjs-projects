import React, { useContext, useEffect, useReducer } from 'react';
import cartItems from './data';
import reducer from './reducer'

const url ="https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();

const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0,
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = async () => {
        dispatch({ type: 'LOADING'});
        const res = await fetch(url);
        const cart = await res.json();
        dispatch({ type: 'DISPLAY_ITEMS', payload: cart});
    };
    
    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'});
    };

    const removeCart = (id) => {
        dispatch({ type: 'REMOVE', payload: id});
    };

    const increase = (id) => {
        dispatch({ type: 'INCREASE', payload: id});
    };

    const decrease = (id) => {
        dispatch({ type: 'DECREASE', payload: id});
    };

    const toggleAmt = (id, type) => {
        dispatch({ type:'TOGGLE_AMT', payload:{id, type}})
    };

    useEffect(() => {
        fetchData();
    },[])

    useEffect(() => {
        dispatch({ type: 'GET_TOTALS'})
    }, [state.cart])

    return (
        <AppContext.Provider
            value={{
                ...state,
                clearCart,
                removeCart,
                increase,
                decrease,
                toggleAmt
            }}
        >
            { children }
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };