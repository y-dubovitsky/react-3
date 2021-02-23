import React from 'react';
import {CustomContext} from './BookShop';
import Book from './Book';

export default function Books() {

    const {books = []} = React.useContext(CustomContext);
    console.log(books);

    return(
        <>
            {
                books.map(book => {
                    return <Book key={book.id} {...book}/>
                })
            }
        </>
    )
}