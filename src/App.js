import React from 'react';
import MainPage from './pages/MainPage';
import CategoryPage from './pages/CategoryPage';
import DetailPage from './pages/DetailPage';
import MapPage from './pages/MapPage';
import './App.css'
import { GlobalStyle } from './GlobalStyles';
import {Route,Routes,BrowserRouter} from "react-router-dom";

function App() {
  return (
<>
      <GlobalStyle/>

      <BrowserRouter>
          <div>
      <Routes>
      <Route path="/MainPage" element={<MainPage/>}/>
      <Route path="/CategoryPage" element={<CategoryPage/>}/>
      {/* <Route path="/DetailPage" element={<DetailPage/>}/>
      <Route path="/MapPage" element={<MapPage/>}/> */}
      </Routes>
      
      <MainPage/>
      <CategoryPage/>


    </div>
    </BrowserRouter>

  
    </>
  );
}

export default App;
