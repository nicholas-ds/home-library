import styled from 'styled-components';

function Footer() {
  return <Copyright>&copy; Nicholas Smay Design 2021</Copyright>;
}

const Copyright = styled.div`
  position: fixed;
  height: 50px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;

  padding: 25px;
  text-align: center;
`;
export default Footer;
