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
  padding-left:45px;
  padding-right:600px;
`;

const MiddleText = styled.button`
  height: 48px;
  width: 1000px;
  background-color: #ffffff;
  font-size: 25px;
  color:#7D756D;
  border-color:#ffffff;
  border:0;
  outline:0;
  padding-right:120px;
`;

const StyledButton = styled.button`
  height: 45px;
  width: 250px;
  background-color: #F2EDF4;
  font-size: 25px;
  color:#7B43F1;
  border-color:#F2EDF4;
  border-radius:19.5px;
  outline:0;
  margin-left:30px;
`;


function DetailPage() {
    const navigate = useNavigate();
    return(

     <div>
       <Header/>
       <br/>
       <br/>
       <br/>
       <center>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div>
            <img alt="joocake"
            src="img/joocakelogo.PNG"
            width="380"
            height="380"
        />
        <br/>
       </div>

        <div>
        <img alt="cakeexample"
       src="img/cake1.PNG"
       width="380"
       height="380"
       />
       <br/>
       </div>

        <div>
        <img alt="cakeexample2"
       src = "img/cake2.PNG"
       width="380"
       height="380"
       />
       <br/>
       </div>
    </div>
        <br/>
        <br/>
    </center>
    <div>
        <BigText>주 케이크</BigText>
        <br/>
    <br/>
    <MiddleText>직접 구운 촉촉한 시트와 크림치즈크림을 사용합니다.</MiddleText>
    <br/>
    <br/>
    <div style={{margininLeft:'50'}}>
    <StyledButton>#충무로케이크</StyledButton>
    <StyledButton>#레터링케이크</StyledButton>
    <StyledButton>#도시락케이크</StyledButton>
    </div>
    </div>
    </div>
    );
}
export default DetailPage;