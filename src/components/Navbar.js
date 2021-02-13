import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import AccountModal from './AccountModal';

function Navbar() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div>
      <Nav>
        <NavListItem>
          <StyledLink to="/">Home</StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/books">Books</StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/register">SignUp!</StyledLink>
        </NavListItem>
        <NavListItem>
          <AccountIcon
            onClick={() => setModalVisible(true)}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </AccountIcon>
        </NavListItem>
      </Nav>
      {modalVisible && <AccountModal isVisible={modalVisible} />}
    </div>
  );
}

const AccountIcon = styled.svg`
  cursor: pointer;
`;

const Nav = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  height: 8vh;
  font-color: black;
  font-weight: bold;
`;

const NavListItem = styled.li`
  font-size: 30px;
  :hover {
    transform: scale(1.1);
  }
  padding: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default Navbar;
