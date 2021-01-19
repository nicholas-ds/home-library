import { useState } from 'react';
import styled from 'styled-components';

function SearchBar() {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(search);
  };

  return (
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

export default SearchBar;
