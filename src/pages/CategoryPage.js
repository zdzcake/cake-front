import React from "react";
import styled from 'styled-components';
import Header from '../components/Header'
import { Link } from "react-router-dom";

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



function CategoryPage() {
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
    <Link to="./CategoryPage">
       <div>
       <img className="dosirak"
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
       <img className="heart"
       src="img/heart.jpg"
       width="350"
       height="350"
       />
       <br/>
       <MiddleText>하트 케이크</MiddleText>
       </div>

        &emsp;  &emsp;  &emsp;

        <div>
       <img className="letter"
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
export default CategoryPage;