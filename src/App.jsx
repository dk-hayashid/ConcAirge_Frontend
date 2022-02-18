

import { React, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import ResponsiveAppBar from './components/Header';
import Home from "./components/Home";
import Map from "./components/Map";
import Form from "./components/Form";
import Footer from './components/Footer';
import Page404 from './components/Page404';
//import HideAppBar from './components/Scroll';


function App(props) {
  const [comTem, setComTem] = useState('');
  const [map, setMap] = useState('');
  function changeComTem(ComTem) {
    setComTem(ComTem);
  }
  function changeMap(map) {
    setMap(map);
  }
  return (

    <body>
      <main>
        <BrowserRouter>
          <ResponsiveAppBar />
          <Routes>
            <Route exact path="/" element={<Home changeComTem={changeComTem} />} />
            <Route
              path="/form"
              element={<Form changeComTem={changeComTem}
                changeMap={changeMap} />}
            />
            <Route path="/map" element={<Map comTem={comTem}
              map={map}
            />}
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </body>
  )
}

export default App;
