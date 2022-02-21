import { React, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ResponsiveAppBar from './components/Header';
import Home from "./components/Home";
import Map from "./components/Map";
import Form from "./components/Form";
import Footer from './components/Footer';
import Page404 from './auth/page404';
import SignIn from './auth/sign_in';
import Signup from './auth/sign_up';
import Verification from './auth/verification';



function App(props) {
  const [token, setToken] = useState('');
  const [comTem, setComTem] = useState('');
  const [map, setMap] = useState('');

  function changeComTem(ComTem) {
    setComTem(ComTem);
  }
  function changeMap(map) {
    setMap(map);
  }

  if (!token) {
    return (
      <body>
        <main>
          {/* <h1>ようこそConcAirgeサービスへ！利用するにはログインしてね！</h1> */}
          {/* <img src="./images/logo.png" align="center" width="50%"></img> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignIn setToken={setToken} />} />
              <Route path='/auth/sign_up' element={<Signup />} />
              <Route path='/auth/verification' element={<Verification />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </BrowserRouter>

        </main>
      </body>
    )
  }
  return (

    <body>
      <main>
        <BrowserRouter>
          <ResponsiveAppBar token={token} setToken={setToken} />
          <Routes>
            <Route exact path="/"
              element={<Home changeComTem={changeComTem} />} />
            <Route
              path="/form"
              element={<Form changeComTem={changeComTem}
                changeMap={changeMap} />} />
            <Route path="/map"
              element={<Map comTem={comTem} map={map} />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </body>
  )
}

export default App;
