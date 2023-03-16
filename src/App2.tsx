import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import App from './App';
import Post from './pages/Post';
import Todo from './pages/Todo';

import Footer from './pages/Footer';
import Navigation from './pages/Navigation';

import './App.css';

const App2 = () => {
  return (
    <div>
        <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='tasklist' element={<App />} />
                <Route path='post' element={<Post />} />
                <Route path='todo' element={<Todo />} />
                <Route path='about' element={<About />} />
                
            </Routes>
        <Footer />
    </div>
  );
};

export default App2;
