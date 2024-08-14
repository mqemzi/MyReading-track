const Shelf = ({ books, title, updateShelf }) => {
    return (
        <div className="book-shelf">
            <h2 className="shelf-title">{title}</h2>
            <hr />
            <div className="books">
                {books.map((book) => (
                    <div key={book.id} className="book">
                        <div className="book-top">
                            <div className="book-cover"
                                style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage: `url(${book.imageLinks.thumbnail})`,
                                }}></div>
                            <div className="book-shelf-changer">
                                
                                <select
                                    className="custom-select"
                                    value={book.shelf}
                                    onChange={(e) => updateShelf(book, e.target.value)}
                                >
                                    <option value="move" disabled={true}>
                                        Move to...
                                    </option>
                                    <option value="currentlyReading" >
                                        Currently Reading
                                    </option>
                                    <option value="wantToRead" >
                                        Want to Read
                                    </option>
                                    <option value="read" >
                                        Read
                                    </option>
                                    <option value="none" >
                                        None
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors.join(", ")}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shelf;
