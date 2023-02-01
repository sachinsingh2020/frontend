import React from 'react';
import './App.css';
import Header from "./component/layout/Header/Header.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader"
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home.js"


function App() {

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Droid Serif']
      }
    });

  }, [])

  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
