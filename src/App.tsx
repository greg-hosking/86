import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import UsernameProvider from './context/UsernameContext';
import HomePage from './pages/home';
import PlaceholderPage from './pages/placeholder';

const App: React.FunctionComponent = () => {
  return (
    <UsernameProvider>
      <Container fluid className='app-container p-0'>
        <BrowserRouter>
          <header>
            <Navigation />
          </header>
          <main>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/placeholder' element={<PlaceholderPage />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </BrowserRouter>
      </Container>
    </UsernameProvider>
  );
};

export default App;
