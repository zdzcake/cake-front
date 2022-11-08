import React from 'react';
import MainPage from './pages/MainPage';
import './App.css'
import { GlobalStyle } from './GlobalStyles';
import {Route,Routes,BrowserRouter} from "react-router-dom";
import CategoryPageDosirak from './pages/CategoryPageDosirak';
import CategoryPageLetter from './pages/CategoryPageLetter';
import CategoryPageHeart from './pages/CategoryPageHeart';

function App() {
  return (
<>
      <GlobalStyle/>

      <BrowserRouter>
          <div>
      <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/CategoryPageDosirak" element={<CategoryPageDosirak/>}/>
      <Route path="/CategoryPageLetter" element={<CategoryPageLetter/>}/>
      <Route path="/CategoryPageHeart" element={<CategoryPageHeart/>}/>
      {/* <Route path="/DetailPage" element={<DetailPage/>}/>
      <Route path="/MapPage" element={<MapPage/>}/> */}
      </Routes>
    </div>
    </BrowserRouter>

    </>
  );
}

export default App;
