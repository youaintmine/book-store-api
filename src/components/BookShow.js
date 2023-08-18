import BookEdit from './BookEdit'
import { useState } from "react";

function BookShow({book, onDelete, onEdit}) {
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(book.id);
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = (id, title) => {
        setShowEdit(false);
        onEdit(id, title);
    }

    let content = <h3>{book.title}</h3>;

    if(showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book}/>
    }

    return (
        <div className="book-show">
            {content}
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default BookShow;