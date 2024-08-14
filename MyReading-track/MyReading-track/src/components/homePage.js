import { Link } from "react-router-dom";
import Shelf from "./shelf";
import Header from "./header";

const HomePage = ({ bookList, handleBookStateChange }) => {
    
  return (
    <div className="home-page">
        <Header />
        <div className="book-list">
            <Shelf 
                books={bookList.filter(b => b.shelf === "currentlyReading")} 
                title="Currently Reading"
                updateShelf={handleBookStateChange} />
            <Shelf 
                books={bookList.filter(b => b.shelf === "wantToRead")} 
                title="Want to Read" 
                updateShelf={handleBookStateChange} />
            <Shelf 
                books={bookList.filter(b => b.shelf === "read")} 
                title="Read" updateShelf={handleBookStateChange} />
        </div>
        <div className="open-search">
            <Link to="/search">Add a book</Link>
        </div>
            
    </div>
  );
};



export default HomePage;