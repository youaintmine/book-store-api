import { useState } from "react";

function BookEdit({book, onSubmit}) {
    const [booktitle, setBookTitle] = useState(book.title);

    const handleToggleChange = (event) => {
        setBookTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, booktitle);
    }


    return <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input className="input" value={book.title} onChange={handleToggleChange}/>
        <button className="button is-primary">
            Save
        </button>
    </form>
}

export default BookEdit;