import styled from 'styled-components';

import notAvailable from '../images/imageNotAvailable.jpg';

function Books({ books }) {
  return (
    <>
      <Gallery>
        {books.map((book) => (
          <Card>
            {(book.volumeInfo.imageLinks && (
              <CardImageContainer>
                <BookImg src={book.volumeInfo.imageLinks.smallThumbnail} />
              </CardImageContainer>
            )) || (
              <CardImageContainer>
                <BookImg src={notAvailable} alt="Image Not Available" />
              </CardImageContainer>
            )}
            <CardInfo>
              <h3>Title: {book.volumeInfo.title}</h3>
              <p>Author: {book.volumeInfo.authors}</p>
              <p>Publish Year: {book.volumeInfo.publishedDate}</p>
              <AddToCollection type="button" value="Add to collection" />
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
  background-color: #d0db97;
  box-shadow: 2px 2px 2px rgba(0, 20, 30, 0.5);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  cursor: pointer;
  padding: auto;
  border-radius: 15px;
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

const AddToCollection = styled.input`
  margin: 15px;
`;

export default Books;
