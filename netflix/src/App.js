import React from 'react';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import FavList from './components/FavList /FavList ';
import NavBar from './components/Navbar/NavBar';
function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/trending" component={<Home />} />
        <Route path="/favlist" element={< FavList />} />
      </Routes>
    </>
  );
}

export default App;