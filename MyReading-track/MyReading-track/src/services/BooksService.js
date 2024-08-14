
export class BooksService {
    constructor() {
        this.api = "https://reactnd-books-api.udacity.com";
        this.token = localStorage.token;
        if (!this.token) this.token = localStorage.token = Math.random().toString(36).substr(-8);
        this.headers = {
        Accept: "application/json",
        Authorization: this.token,
        };
    }
    
    get = (bookId) =>
        fetch(`${this.api}/books/${bookId}`, { headers: this.headers })
        .then((res) => res.json())
        .then((data) => data.book);
    
    getAll = () =>
        fetch(`${this.api}/books`, { headers: this.headers })
        .then((res) => res.json())
        .then((data) => data.books);
    
    update = (book, shelf) =>
        fetch(`${this.api}/books/${book.id}`, {
        method: "PUT",
        headers: {
            ...this.headers,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ shelf }),
        }).then((res) => res.json());
    
    search = (query, maxResults) =>
        fetch(`${this.api}/search`, {
        method: "POST",
        headers: {
            ...this.headers,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, maxResults }),
        })
        .then((res) => res.json())
        .then((data) => data.books);

}