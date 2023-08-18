import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList'
import axios from "axios";


function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    }

    useEffect(() =>{
        fetchBooks();
    }, [])

    const bookCreate =async (title) => {
        const addNewBook =await axios.post('http://localhost:3001/books', {
            title: title
        });
        const addedBooks = [ ...books, addNewBook.data];
        setBooks(addedBooks);
    };

    const deleteBookbyID = async(id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter((book) => {
            return book.id !== id
        });

        setBooks(updatedBooks);
    };

    const editBookbyID =async (id, title) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: title
        });

        const updatedBooks = books.map((book, index) => {
            if(book.id === id){
                return { ...book, ...response.data};
            }
            return book;
        });
        setBooks(updatedBooks);
    }


    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookbyID} onEdit={editBookbyID}/>
            <BookCreate onCreate={bookCreate}/>
        </div>
    );
}

export default App;