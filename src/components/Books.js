import { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const url =
  'https://www.googleapis.com/books/v1/volumes?q=potter+inauthor:rowling&key=AIzaSyAxfOZ57IL-3EHpw-Hyd5yZ90ZjZgTg0Kc';

function Books() {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.items);
      });
  }, []);

  if (!books) return null;

  return (
    <>
      <SearchBar />
      <Gallery>
        {books.map((book) => (
          <Card>
            {book.volumeInfo.imageLinks && (
              <CardImageContainer>
                <BookImg src={book.volumeInfo.imageLinks.smallThumbnail} />
              </CardImageContainer>
            )}
            <CardInfo>
              <h3>Title: {book.volumeInfo.title}</h3>
              <p>Author: {book.volumeInfo.authors}</p>
              <p>Publish Year: {book.volumeInfo.publishedDate}</p>
            </CardInfo>
          </Card>
        ))}
      </Gallery>
    </>
  );
}

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(315px, 1fr));
  grid-row-gap: 15px;
  grid-column-gap: 15px;
  grid-auto-rows: 1fr;
  max-width: 1200px;
  margin: auto;
  padding: 50px;
`;

const Card = styled.div`
  background-color: #e7e3e2;
  box-shadow: 2px 2px 2px rgba(0, 20, 30, 0.5);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  cursor: pointer;
  padding: auto;
  border-radius: 25px;
`;

const CardInfo = styled.div`
  text-align: left;
`;

const CardImageContainer = styled.div``;

const BookImg = styled.img`
  padding: 10px;
  width: 95px;
  border-radius: 25%;
`;

export default Books;
