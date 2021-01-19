import './App.css';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Account from './components/Account';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import styled from 'styled-components';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/books" exact>
            <Books />
          </Route>
          <Route path="/account" exact>
            <Account />
            <div>Account</div>
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  background: #f9f7f4;
  min-width: 430px;
  max-width: 1300px;
  margin: auto;
  border-radius: 25px;
  box-shadow: 2px 2px 2px rgba(0, 20, 30, 0.5);
`;

export default App;
