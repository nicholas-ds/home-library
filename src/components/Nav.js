import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Nav>
        <NavListItem>
          <Link to="/">Home</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/Books">Books</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/Account">Account</Link>
        </NavListItem>
      </Nav>
    </div>
  ); // Brian, why not use class components?
}

const Nav = styled.ul`
  list-style-type: none;
  justify-content: flex-end;
  display: flex;
  margin: 0;
  padding: 0;
  height: 8vh;
`;

const NavListItem = styled.li`
  padding: 10px;
`;

export default Navbar;
