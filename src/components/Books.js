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
   display: inline-block;
   padding: 0.35em 1.2em;
   border: 0.1em solid #ffffff;
   margin: 0 0.3em 0.3em 0;
   border-radius: 0.12em;
   box-sizing: border-box;
   text-decoration: none;
   font-family: 'Roboto', sans-serif;
   font-weight: 300;
   color: black;
   text-align: center;
   transition: all 0.2s;

  animation:bouncy 5s infinite linear;
 position:relative;

  @keyframes bouncy {
 0%{top:0em}
 40%{top:0em}
 43%{top:-0.9em}
 46%{top:0em}
 48%{top:-0.4em}
 50%{top:0em}
 100%{top:0em;}
`;

export default Books;
