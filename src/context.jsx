import React from 'react';

export const Context = React.createContext();

export const ShopContext = ({children}) => {

    const outcome = {
        a: 'example',
        b: 123
    }

    return (
        <Context.Provider value={outcome}>
            {children}
        </Context.Provider>
    )
}