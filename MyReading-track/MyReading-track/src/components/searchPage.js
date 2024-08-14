import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./header";

const SearchPage = ({ bookList, handleBookStateChange, handleSearch}) => {

    const [searchTerm, setSearchTerm] = useState("");
    const search = (e) => {
        setSearchTerm(e.target.value);
        if (e.target.value === "") 
            return;
        handleSearch(e.target.value);
    }
  return (
    <div className="search-page">
        <Header />
        <div className="search-books-bar">
            <div className="label">Search</div>
            <input type="text" 
                value={searchTerm} 
                onChange={(e) => search(e)} />
        </div>
        <div className="book-list">
            <div className="books">
                {Array.isArray(bookList) && bookList.filter(b => b.title.toLowerCase().includes(searchTerm.toLowerCase())).map((book) => (
                    <div key={book.id} className="book">
                        <div className="book-top">
                            <div className="book-cover"
                                style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${book.imageLinks?.thumbnail})`,
                                }}></div>
                            <div className="book-shelf-changer">
                                <select
                                    className="custom-select"
                                    value={book.shelf || "move"} // Default value
                                    onChange={(e) => handleBookStateChange(book, e.target.value)}
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
                        <div className="book-authors">{book.authors? book.authors.join(", "): ""}</div>
                    </div>
                ))}
            </div>
        </div>
        <Link to="/">Home</Link>
    </div>
  );
};



export default SearchPage;