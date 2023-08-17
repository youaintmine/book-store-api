import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList'


function App() {
    const [books, setBooks] = useState([]);

    const bookCreate = (title) => {
        const addedBooks = [ ...books, {id: Math.round(Math.random()*9999), title}];
        setBooks(addedBooks);
    };


    return (
        <div className="app">
            <BookList books={books}/>
            <BookCreate onCreate={bookCreate}/>
        </div>
    );
}

export default App;