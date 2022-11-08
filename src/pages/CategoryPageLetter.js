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

function CategoryPageLetter() {
    const navigate=useNavigate();
    return(

     <div>
       <Header/>
       <br/>
       <br/>
       <SmallText>카테고리</SmallText>
       <StyledButton1
       onClick={()=>{
        navigate("/CategoryPageDosirak")
       }}>도시락케이크</StyledButton1>
       <StyledButton1
       onClick={()=>{
        navigate("/CategoryPageHeart")
       }}>하트케이크</StyledButton1>
       <StyledButtonPage>레터링케이크</StyledButtonPage>
       <br/>
       <br/>
       <br/>
       <br/>
       <BigText>이 레터링 케이크 가게는 어때요?</BigText>
       <br/>
       <br/>
       <br/>
       <br/>


       <center>
    
    
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Link to="./CategoryPageDosirak">
       <div>
       <img alt="dosirak"
       src="img/dosirak.jpg"
       width="350"
       height="350"
       />
       <br/>
       <MiddleText>도시락 케이크</MiddleText>
       </div>
       </Link>
        &emsp;  &emsp;  &emsp;

        <div>
       <img alt="heart"
       src="img/heart.jpg"
       width="350"
       height="350"
       />
       <br/>
       <MiddleText>하트 케이크</MiddleText>
       </div>

        &emsp;  &emsp;  &emsp;

        <div>
       <img alt="letter"
       src="img/letter.jpg"
       width="350"
       height="350"
       />
       <br/>
       <MiddleText>레터링 케이크</MiddleText>
       </div>
       </div>

    </center>
        <br/>
        <br/>
        <br/>

    <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
     </div>
     
    );
}
export default CategoryPageLetter;