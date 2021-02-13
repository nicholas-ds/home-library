import styled from 'styled-components';
import { useState } from 'react';

function Login() {
  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'error') {
          console.log('wrong email or password');
        }

        console.log('response data', data);
      });
  };

  return (
    <LoginModal>
      <LoginForm onSubmit={handleSubmit}>
        <LoginLabel htmlFor="email">
          <h3>EMAIL</h3>
        </LoginLabel>
        <LoginField
          onChange={({ target: { value } }) =>
            setUser({ ...user, email: value })
          }
          type="text"
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
        <LoginButton onClick={handleSubmit}>Login!</LoginButton>
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

export default Login;
