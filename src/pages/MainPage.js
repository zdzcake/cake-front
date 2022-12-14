import React from "react";
import styled from 'styled-components';
import Header from '../components/Header'
import { useNavigate } from "react-router-dom";

const BigText = styled.button`
  height: 48px;
  width: 1000px;
  background-color: #ffffff;
  font-size: 40px;
  color:#7D756D;
  border-color:#ffffff;
  border:0;
  outline:0;
  padding-left:35px;
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



function MainPage() {
    const navigate = useNavigate();
    return(

     <div>
       <Header/>
       <br/>
       <br/>
       <BigText>카테고리를 선택해주세요.</BigText>
       <br/>
       <br/>
       <br/>
       <br/>


       <center>
    
    
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  
       <div>
       <img alt="dosirak"
       src="img/dosirak.jpg"
       width="350"
       height="350"
       onClick={()=>{
        navigate("/CategoryPageDosirak");
       }}
       />
       <br/>
       <MiddleText
       onClick={()=>{
        navigate("/CategoryPageDosirak");
       }}>도시락 케이크</MiddleText>
       </div>
 
        &emsp;  &emsp;  &emsp;

        <div>
       <img alt="heart"
       src="img/heart.jpg"
       width="350"
       height="350"
       onClick={()=>{
        navigate("/CategoryPageHeart");
       }}
       />
       <br/>
       <MiddleText
       onClick={()=>{
        navigate("/CategoryPageHeart");
       }}>하트 케이크</MiddleText>
       </div>

        &emsp;  &emsp;  &emsp;

        <div>
       <img alt="letter"
       src="img/letter.jpg"
       width="350"
       height="350"
       onClick={()=>{
        navigate("/CategoryPageLetter");
       }}
       />
       <br/>
       <MiddleText
       onClick={()=>{
        navigate("/CategoryPageLetter");
       }}>레터링 케이크</MiddleText>
       </div>
       </div>

    </center>
        <br/>
        <br/>
        <br/>
    <BigText>이 케이크 가게는 어때요?</BigText>
    <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
     </div>
     
    );
}
export default MainPage;