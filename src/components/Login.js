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
        <LoginLabel htmlFor="username">
          <h3>USERNAME</h3>
        </LoginLabel>
        <LoginField type="text" id="username" name="username" />
        <LoginLabel htmlFor="password">
          <h3>PASSWORD</h3>
        </LoginLabel>
        <LoginField type="text" id="password" name="password" />
        <LoginButton>Login!</LoginButton>
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
