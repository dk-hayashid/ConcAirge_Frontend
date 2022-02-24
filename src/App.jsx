

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
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';


let theme = createTheme({
  typography: {
    fontFamily: ['Raleway, Arial','Kosugi',].join(','),
    
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Kosugi';
          font-style: normal;
          font-display: swap;
          font-weight: 900;
          
          unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
        },
      
          ::-webkit-scrollbar{
            width: 16px;                // スクロールバー全体の幅
            height:16px;
            background-color: #f9f9f9;  // スクロールバーの背景色
          },
          ::-webkit-scrollbar-thumb {
            border-radius: 10px;                      // スクロールバーの丸み
            box-shadow: inset 0 0 10px 10px #909090;  // スクロールバーの色
            border: solid 4px transparent;            // スクロールバーの左右の余白
          },
          // ::-webkit-scrollbar-track {
          //   background-color: rgb(220,220,220);
          //   border-radius: 10px;
          // },
      `,
    },
  },
});
theme = responsiveFontSizes(theme);//文字サイズのレスポンシブ対応

function App(props) {
  const [token, setToken] = useState('');
  const [comTem, setComTem] = useState('');
  const [userName, setUserName] = useState('');
  const [map, setMap] = useState('');

  function changeComTem(ComTem) {
    setComTem(ComTem);
  }
  function changeMap(map) {
    setMap(map);
  }

  if (!token) {
    return (
      <ThemeProvider theme={theme}>
      <body>
        <main>
          
          {/* <h1>ようこそConcAirgeサービスへ！利用するにはログインしてね！</h1> */}
          {/* <img src="./images/logo.png" align="center" width="50%"></img> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignIn setToken={setToken} setUserName={setUserName} />} />
              <Route path='/auth/sign_up' element={<Signup />} />
              <Route path='/auth/verification' element={<Verification />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </BrowserRouter>
          

        </main>
      </body>
      </ThemeProvider>
    )
  }
  return (

    <ThemeProvider theme={theme}>
    <body>
      <main>
        <BrowserRouter>
          <ResponsiveAppBar 
            token={token} 
            setToken={setToken} 
            userName={userName}
          />
          <Routes>
            <Route exact path="/"
              element={<Home changeComTem={changeComTem} />} />
            <Route
              path="/form"
              element={<Form changeComTem={changeComTem}
                changeMap={changeMap}
                email={userName} />} />
            <Route path="/map"
              element={<Map comTem={comTem} map={map} userName={userName} token={token} />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </body>
    </ThemeProvider>
  )
}

export default App;
