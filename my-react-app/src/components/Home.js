import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    // Fetch books data from the backend
    useEffect(() => {
        axios.get('http://localhost:5000/api/books')
            .then(response => setBooks(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Handle search input change
    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    // Filter books based on search input
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Book Collection</h1>
            <input 
                type="text" 
                placeholder="Search books..." 
                value={search}
                onChange={handleSearch}
                style={{ width: '100%', padding: '12px', marginBottom: '20px' }}
            />
            <ul>
                {filteredBooks.map(book => (
                    <li key={book.id}>
                        {book.title} by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
