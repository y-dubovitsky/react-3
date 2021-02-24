import React from 'react';
import CustomContext from './CustomContext';
// export const CustomContext = new React.createContext();

export default function BookShop(props) {

    const [books, setBooks] = React.useState([
        {id: 1, first: 'Js', },
        {id: 2, first: 'Js', },
        {id: 3, first: 'Js', }
    ]);

    const addBook = (book) => {
        setBooks(
            [...books, book]
        );
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    }

    const outcome = {
        books,
        addBook,
        removeBook
    }

    return (
        <>
            <CustomContext.Provider value={outcome}>
                {props.children}
            </CustomContext.Provider>
        </>
    )
}