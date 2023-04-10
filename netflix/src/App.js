import React from 'react';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/trending" component={<Home />} />
      </Routes>
    </>
  );
}

export default App;