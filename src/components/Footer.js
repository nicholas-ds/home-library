import styled from 'styled-components';

function Footer() {
  return <Copyright>&copy; Nicholas Smay Design 2021</Copyright>;
}

const Copyright = styled.div`
  padding: 25px;
  text-align: center;
`;
export default Footer;
