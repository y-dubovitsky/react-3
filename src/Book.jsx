import React from 'react';

export default function Book(props) {

    const {id, first} = props;

    return (
        <>
            {` id = ${id} name = ${first} `}
        </>
    )
}