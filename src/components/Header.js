import React from 'react';
import './Header.css';
import styled from 'styled-components';
import {BiMap,BiUserCircle,BiSearch} from "react-icons/bi";

const HeaderContents=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #E6D2F5;
    width:100%;
    justify-content:center;
`;

const Header = () => (
    <HeaderContents>
   
    <img className="Logo"
    src="img/logo2.png"
    width="200"
    height="90"
    />
    &nbsp;&nbsp;
   
   <div className="search-bar">
   <BiSearch
   size="25"
   color="#7B43F1"/>
   <input className="search-bar_input"
placeholder={`주문하고 싶은 케이크를 검색해 보세요`}>

</input>
   </div>

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
   <BiMap
   size="40"
   color="#7B43F1"/>
   &emsp;&emsp;
   <BiUserCircle 
   size="40"
   color="#7B43F1"/>

    </HeaderContents>

       

)

export default Header;