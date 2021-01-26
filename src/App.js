import './App.css';
import Navbar from './components/Navbar';
import Account from './components/Account';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import styled from 'styled-components';
import BooksGallery from './components/BooksGallery';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Route path="/" exact>
        <Login />
      </Route>
      <Container>
        <Switch>
          <Route path="/books" exact>
            <BooksGallery />
          </Route>
          <Route path="/account" exact>
            <Account />
            <div>Account</div>
          </Route>
        </Switch>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

const Container = styled.div`
  background: #f9f7f4;
  min-width: 430px;
  max-width: 1300px;
  margin: auto;
  border-radius: 25px;
  box-shadow: 0px 0px 4px rgba(0, 20, 30, 0.5);
`;

export default App;
