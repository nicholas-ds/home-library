import styled from 'styled-components';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/test')
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <LoginModal>
      <LoginForm onSubmit={handleSubmit}>
        <LoginLabel htmlFor="username">Username</LoginLabel>
        <LoginField type="text" id="username" name="username" />
        <LoginLabel htmlFor="password">Password</LoginLabel>
        <LoginField type="text" id="password" name="password" />
        <LoginButton>Login!</LoginButton>
      </LoginForm>
      <LoginForm>
        <LoginButton>Sign Up</LoginButton>
      </LoginForm>
    </LoginModal>
  );
}

const LoginModal = styled.div`
  background: #f9f7f4;
  margin: 0 auto;
  width: 400px;
  text-align: center;
  display: flex;
  justify-content: center;
  border-radius: 25px;
`;

const LoginForm = styled.form`
  padding: 10px;
  line-height: 3rem;
`;

const LoginLabel = styled.label``;

const LoginField = styled.input`
  display: block;
  padding: 5px;
`;

const LoginButton = styled.button``;

export default Login;
