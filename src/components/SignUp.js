import styled from 'styled-components';
import { useState } from 'react';

function SignUp() {
  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/users/register', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log('response data', data));
  };

  return (
    <LoginModal>
      <LoginForm onSubmit={handleSubmit}>
        <LoginLabel htmlFor="firstName">
          <h3>First Name</h3>
        </LoginLabel>
        <LoginField
          onChange={({ target: { value } }) =>
            setUser({ ...user, firstName: value })
          }
          type="text"
          id="firstName"
          name="firstName"
        />
        <LoginLabel htmlFor="lastName">
          <h3>Last Name</h3>
        </LoginLabel>
        <LoginField
          onChange={({ target: { value } }) =>
            setUser({ ...user, lastName: value })
          }
          type="text"
          id="lastName"
          name="lastName"
        />

        <LoginLabel htmlFor="email">
          <h3>EMAIL</h3>
        </LoginLabel>
        <LoginField
          onChange={({ target: { value } }) =>
            setUser({ ...user, email: value })
          }
          type="email"
          id="email"
          name="email"
        />
        <LoginLabel htmlFor="password">
          <h3>PASSWORD</h3>
        </LoginLabel>
        <LoginField
          onChange={({ target: { value } }) =>
            setUser({ ...user, password: value })
          }
          type="text"
          id="password"
          name="password"
        />
        <LoginButton onClick={handleSubmit}>Sign Up!</LoginButton>
      </LoginForm>
    </LoginModal>
  );
}

const LoginModal = styled.div`
  background: #d0db97;
  box-shadow: 2px 2px 2px rgba(0, 20, 30, 0.5);
  margin: 0 auto;
  width: 400px;
  text-align: center;
  display: flex;
  justify-content: center;
  border-radius: 15px;
`;

const LoginForm = styled.form`
  padding: 10px;
  line-height: 3rem;
`;

const LoginLabel = styled.label`
  font-weight: bold;
`;

const LoginField = styled.input`
  display: block;
  padding: 5px;
`;

const LoginButton = styled.button``;

export default SignUp;
