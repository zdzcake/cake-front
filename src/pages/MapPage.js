import React from "react";
import styled from 'styled-components';
import Header from '../components/Header'
import { Link, useNavigate } from "react-router-dom";


const BigText = styled.button`
  height: 48px;
  width: 1000px;
  background-color: #ffffff;
  font-size: 40px;
  color:#7D756D;
  border-color:#ffffff;
  border:0;
  outline:0;
  margin-left:80px;
`;

const MiddleText = styled.button`
  height: 48px;
  width: 400px;
  background-color: #ffffff;
  font-size: 25px;
  color:#7D756D;
  border-color:#ffffff;
  border:0;
  outline:0;
`;

const SmallText = styled.button`
  height: 24px;
  width: 200px;
  background-color: #ffffff;
  font-size: 20px;
  color:black;
  border-color:#ffffff;
  border:0;
  outline:0;
  margin-left:230px;
`;

const StyledButton1 = styled.button`
  height: 39px;
  width: 131px;
  background-color: #f5f5f5;
  font-size: 16px;
  color:#7B43F1;
  border-color:#f5f5f5;
  border:0;
  border-radius:19.5px;
  outline:0;
  margin-left:30px;
`;

const StyledButtonPage = styled.button`
  height: 39px;
  width: 131px;
  background-color: #FEF6F4;
  font-size: 16px;
  color:#7B43F1;
  border-color:#7B43F1;
  border-radius:19.5px;
  outline:0;
  margin-left:30px;
`;

function MapPage() {

    return(

     <div>
       <Header/>
      
      </div>
    );
}
export default MapPage;