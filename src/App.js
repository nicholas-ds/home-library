import './App.css';
import Navbar from './components/Nav';
import Books from './components/Books';
import Account from './components/Account';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import styled from 'styled-components';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Container>Homepage</Container>
          </Route>
          <Route path="/books" exact>
            <Books />
            <div>Books</div>
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
  background: #708090;
  height: 100vh;
  padding: 30px;
`;

export default App;
