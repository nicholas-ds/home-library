import { useState } from 'react';
import styled from 'styled-components';
import Books from './Books';

function BooksGallery() {
  const [search, setSearch] = useState('');

  const [books, setBooks] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAxfOZ57IL-3EHpw-Hyd5yZ90ZjZgTg0Kc`,
    )
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.items);
      });
  };

  return (
    <>
      <BookSearch onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></SearchInput>
        <SearchButton type="submit" value="Submit">
          Search
        </SearchButton>
      </BookSearch>
      {books ? <Books books={books} /> : <div>Search for a book!</div>}
    </>
  );
}

const BookSearch = styled.form`
  text-align: center;
  padding: 25px;
`;

const SearchInput = styled.input`
  width: 25%;
  border-radius: 25px;
`;

const SearchButton = styled.button`
  border-radius: 4px;
  border: none;
  text-align: center;
`;

export default BooksGallery;
