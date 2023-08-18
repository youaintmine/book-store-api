import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList'


function App() {
    const [books, setBooks] = useState([]);

    const bookCreate = (title) => {
        const addedBooks = [ ...books, {id: Math.round(Math.random()*9999), title}];
        setBooks(addedBooks);
    };

    const deleteBookbyID = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id
        });

        setBooks(updatedBooks);
    };

    const editBookbyID = (id, title) => {
        const updatedBooks = books.map((book) => {
            if(book.id === id){
                return { ...book, title};
            }

            return book;
        })
    }


    return (
        <div className="app">
            <BookList books={books} onDelete={deleteBookbyID} onEdit={editBookbyID}/>
            <BookCreate onCreate={bookCreate}/>
        </div>
    );
}

export default App;