import React from 'react';
import './Header.css';
import styled from 'styled-components';
import {BiMap,BiUserCircle,BiSearch} from "react-icons/bi";
const HeaderStyle=styled.div`
background-color: #E6D2F5;
width:100%;
flex-direction: row;
display:flex;
position:fixed;
justify-content:center;
height:50px;
padding:30px;
`;

// const StyledInput=styled.input`
// height: 48px;
// width: 486px;
// border-radius: 9px;
// color:#7B43F1;
// font-size:18px;
// padding: 0 0 0 12px;

// `;
const HeaderContents=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Header = () => (
    <HeaderStyle>
        <HeaderContents>
   
        <img className="Logo"
        src="img/logo2.png"
        width="200"
        height="90"
        />
        &nbsp;&nbsp;
       
       <div class="search-bar">
       <BiSearch
       size="25"
       color="#7B43F1"/>
       <input class="search-bar_input"
    placeholder={`주문하고 싶은 케이크를 검색해 보세요.`}>
    
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
        </HeaderStyle>

)

export default Header;