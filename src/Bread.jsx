import React from 'react';
import CustomContext from './CustomContext';

export default function Bread() {

    const {breads = []} = React.useContext(CustomContext);

    return(
        <>
            {breads.map(br => {
                return br.name
            })}
        </>
    )

}