import styled from 'styled-components';

function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <LoginModal>
      <LoginForm>
        <LoginField type="text" id="email" name="email" />
        <LoginField type="text" id="password" name="password" />
        <LoginButton onClick={handleSubmit}>Login!</LoginButton>
      </LoginForm>
    </LoginModal>
  );
}

const LoginModal = styled.div`
  background: #f9f7f4;
  margin: 0 auto;
  max-width: 400px;
  text-align: center;
  justify-content: center;
  border-radius: 25px;
`;

const LoginForm = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 50px;
  line-height: 3rem;
`;

const LoginField = styled.input`
  margin: 10px;
`;

const LoginButton = styled.button`
  margin: 10px;
`;

export default SignUp;
