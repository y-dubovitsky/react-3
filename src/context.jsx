import React from 'react';

export const Context = React.createContext();

export const ShopContext = ({ children }) => {
    
    function reducer(state, action) {
        switch (action.type) {
            case 'TOGGLE_BASKET_VISIBLE': {
                return {
                    ...state,
                    basketVisible: !state.basketVisible
                }
            }
            case 'TOGGLE_LOADING': {
                return {
                    ...state,
                    loading: !state.loading
                }
            }
            default: {
                return state;
            }
        }
    }

    const initialState = {
        basketVisible: false,
        loading: true,
    }

    const [value, dispatch] = React.useReducer(reducer, initialState);

    value.toggleBasketVisible = () => {
        dispatch({ type: 'TOGGLE_BASKET_VISIBLE' });
    }

    value.toggleLoading = () => {
        dispatch({type: 'TOGGLE_LOADING'});
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}