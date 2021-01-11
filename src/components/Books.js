import { useState, useEffect } from 'react';
import styled from 'styled-components';

function Books() {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetch(
      'https://www.googleapis.com/books/v1/volumes?q=potter+inauthor:rowling&key=AIzaSyAxfOZ57IL-3EHpw-Hyd5yZ90ZjZgTg0Kc',
    )
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.items);
        console.log(data.items);
      });
  }, []);

  if (!books) return null;

  return (
    <>
      {books.map((book) => (
        <Gallery>
          <Card>
            <CardImageContainer>
              <BookImg
                src={book.volumeInfo.imageLinks.smallThumbnail}
              ></BookImg>
            </CardImageContainer>
            <CardInfo>
              <h3>Title: {book.volumeInfo.title}</h3>
              <p>Author: {book.volumeInfo.authors}</p>
              <p>Publish Date: {book.volumeInfo.publishedDate}</p>
            </CardInfo>
          </Card>
        </Gallery>
      ))}
    </>
  );
}

const Gallery = styled.div`
  display: grid | inline-grid;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  cursor: pointer;
  width: 100%;
  max-width: 360px;
  margin: 10px 10px 20px;
  padding: 10px;
  background: rgba(245, 245, 245, 0.9);
  border-radius: 0.25em;
  border: 1px solid rgba(50, 50, 50, 0.3);
  transition: 0.4s ease-out;
  overflow: hidden;
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
