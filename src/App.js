import './App.css';
import Navbar from './components/Navbar';
import Account from './components/Account';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BooksGallery from './components/BooksGallery';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Route path="/" exact>
        <Login />
      </Route>
      <Switch>
        <Route path="/books" exact>
          <BooksGallery />
        </Route>
        <Route path="/account" exact>
          <Account />
          <div>Account</div>
        </Route>
        <Route path="/register" exact>
          <SignUp />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
