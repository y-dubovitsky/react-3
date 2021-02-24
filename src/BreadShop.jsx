import React from 'react';
import CustomContext from './CustomContext';

export default function BreadShop(props) {

    const [breads, setBread] = React.useState([
        {
            id: 1,
            name: 'white bread'
        },
        {
            id: 2,
            name: 'black bread'
        },
        {
            id: 3,
            name: 'gray bread'
        }
    ])

    const outcome = {
        breads
    }

    return(
        <>
            <CustomContext.Provider value={outcome}>
                {props.children}
            </CustomContext.Provider>
        </>
    )

}