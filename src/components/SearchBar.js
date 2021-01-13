import styled from 'styled-components';

function SearchBar() {
  return (
    <BookSearch>
      <SearchInput type="text" name="search"></SearchInput>
      <SearchButton type="submit" value="Submit">
        Search
      </SearchButton>
    </BookSearch>
  );
}

const BookSearch = styled.form`
  text-align: center;
  padding: 15px;
`;

const SearchInput = styled.input`
  width: 25%;
  border-radius: 25px;
`;

const SearchButton = styled.button`
  border-radius: 4px;
  broder: none;
  text-align: center;
`;

export default SearchBar;
