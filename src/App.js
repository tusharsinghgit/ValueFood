import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import RecipePage from './Components/RecipePage';
import BlogPosts from "./Components/BlogPosts";
import Awareness from "./Components/Awareness";



function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<RecipePage />} />
        <Route path="/blog" element={<BlogPosts />} />
        <Route path="/awareness" element={<Awareness />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
