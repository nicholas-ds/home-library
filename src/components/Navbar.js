import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Nav>
        <NavListItem>
          <StyledLink to="/">Home</StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/Books">Books</StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/Account">Account</StyledLink>
        </NavListItem>
      </Nav>
    </div>
  );
}

const Nav = styled.ul`
  background-color: #c6c5b3;
  list-style-type: none;
  justify-content: flex-end;
  display: flex;
  margin: 0;
  padding: 0;
  height: 8vh;
`;

const NavListItem = styled.li`
  color: white;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export default Navbar;
