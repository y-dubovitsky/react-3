import React from 'react';

export const CustomContext = new React.createContext();

export default function BookShop(props) {

    const [books, setBooks] = React.useState([
        {
            id: 1,
            first: 'Js',

        },
        {
            id: 2,
            first: 'React',

        },
        {
            id: 3,
            first: 'Spring',

        }
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