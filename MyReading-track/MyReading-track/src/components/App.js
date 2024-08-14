import '../App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from './homePage';
import { BooksService } from '../services/BooksService';
import { useEffect, useState } from 'react';
import SearchPage from './searchPage';

function App() {
    const navigate = useNavigate();
    const booksService = new BooksService();
    const [books, setBooks] = useState([]);
    const [allBooks, setAllBooks] = useState([]);
    
    const getMyBooks = () => {
        booksService.getAll().then((books) => {
            setBooks(books);
            console.log("books", books);
        });
    }

    const getAllBooks = () => {
        booksService.search("a").then((books) => {
            setAllBooks(books);
            console.log("allBooks", allBooks);
        });
    }
    
    useEffect(() => {
        getMyBooks();
        getAllBooks();
        
    }, []);

    const handleBookStateChange = (book, state) => {
        const updatedBooks = books.map((b) => {
            if (b.id === book.id) {
                b.shelf = state;
            }
            return b;
        });
        booksService.update(book, state);
        getMyBooks();
        console.log("handleBookStateChange", book, state);
    }

    const handleSearch = (query) => {
        console.log("query", query);
        booksService.search(query).then((books) => {
            setAllBooks(books);
            navigate("/search");
        }
        );
    }

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <HomePage bookList={books}
            handleBookStateChange={handleBookStateChange} />
        }
      />

    <Route
        exact
        path="/search"
        element={
          <SearchPage bookList={allBooks}
          handleBookStateChange={handleBookStateChange}
          handleSearch={handleSearch} />
        }
      />
      
    </Routes>
  );
}
export default App;
