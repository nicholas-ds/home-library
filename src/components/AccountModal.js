import styled from 'styled-components';

function AccountModal(props) {
  return (
    <StyledAccountModal>
      <AccountContent>
        <ModalHeader>Account Settings</ModalHeader>
        <div>
          <p>
            This is a modal window. You can do the following things with it:
          </p>
          <ul>
            <li>
              <strong>Read:</strong> modal windows will probably tell you
              something important so don't forget to read what they say.
            </li>
            <li>
              <strong>Look:</strong> a modal window enjoys a certain kind of
              attention; just look at it and appreciate its presence.
            </li>
            <li>
              <strong>Close:</strong> click on the button below to close the
              modal.
            </li>
          </ul>
          <button onClick={() => console.log(props.isVisible)}>
            Close me!
          </button>
        </div>
      </AccountContent>
    </StyledAccountModal>
  );
}

const StyledAccountModal = styled.div`
  border-radius: 15px;
  padding: 15px;
  background-color: orange;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AccountContent = styled.div`
  font-size: 100%;
  position: relative;
  border-radius: 3px;
  margin: 0 auto;
  transition: all 0.3s;
  transform: scale(1);
  opacity: 1;
`;

const ModalHeader = styled.h3`
  text-align: center;
`;

export default AccountModal;
