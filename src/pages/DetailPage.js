import React from "react";
import styled from 'styled-components';
import Header from '../components/Header'
import { useNavigate } from "react-router-dom";
import "../map.js"
import MapTest from "../map.js";

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
  font-weight:200;
  padding-right:120px;
`;

const SmallText = styled.button`
  height: 48px;
  width: 1000px;
  background-color: #ffffff;
  font-size: 15px;
  color:#7D756D;
  border-color:#ffffff;
  border:0;
  outline:0;
  font-weight:200;
  padding-right:120px;
`;

const StyledButton = styled.button`
  height: 35px;
  width: 120px;
  background-color: #F2EDF4;
  font-size: 13px;
  color:#7B43F1;
  border-color:#ffffff;
  border-radius:19.5px;
  outline:0;
  border: 0;
  margin-left:30px;

`;

const InfoSmallText = styled.button`
  height: 48px;
  width: 100px;
  background-color: #ffffff;
  font-size: 14px;
  color:#7D756D;
  border-color:#ffffff;
  border:0;
  outline:0;
  font-weight:200;
`;

const InfoBigText = styled.button`
  height: 48px;
  width: 300px;
  background-color: #ffffff;
  font-size: 20px;
  color:#7D756D;
  border-color:#ffffff;
  border:0;
  outline:0;
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
            width="300"
            height="300"
        />
        <br/>
       </div>

        <div>
        &emsp;&emsp;
        <img alt="cakeexample"
       src="img/cake1.PNG"
       width="300"
       height="300"
       />
       <br/>
       </div>

        <div>
        &emsp;&emsp;
        <img alt="cakeexample2"
       src = "img/cake2.PNG"
       width="300"
       height="300"
       />
       <br/>
       </div>
    </div>
        <br/>
        <br/>
    </center>
    <div>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <BigText>주 케이크</BigText>
        <br/>
    <br/>
    &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <MiddleText>직접 구운 촉촉한 시트와 크림치즈크림을 사용합니다.</MiddleText>
    <br/>
    <br/>
    <div>
    &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <StyledButton>#충무로케이크</StyledButton>
    <StyledButton>#레터링케이크</StyledButton>
    <StyledButton>#도시락케이크</StyledButton>
    </div>
    </div>
    <br/>
  
    <div>
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <img alt="map"
       src = "img/map.PNG"
       width="15"
       height="15"
       />
       <br>
       </br>
       <SmallText>서울특별시 중구 서애로 12-8</SmallText>
       <MapTest></MapTest>
       
    </div>
    <br></br>
    <center>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div>
          <img alt=""
          src = "img/phone.PNG"
          width="40"
          height="40"
          />
          <br/>
          <InfoBigText>전화번호</InfoBigText>
          <br/>
          <br/>
          <InfoSmallText> 0507-1330-4804</InfoSmallText>
        </div>
        <div>
          <img alt = ""
          src = "img/clock.PNG"
          width="40"
          height="40"
          />
          <br/>
          <InfoBigText>영업시간</InfoBigText>
          <br/>
          <br/>
          <InfoSmallText> 
          13:00 ~ 19:30: 화, 목, 금
          </InfoSmallText>
          <InfoSmallText>
          13:00 ~ 17:30: 수
          </InfoSmallText>
          <InfoSmallText>
          13:00 ~ 16:30: 토
          </InfoSmallText>
        </div>
        <div>
        <img alt = ""
          src = "img/cal.PNG"
          width="40"
          height="40"
          />
          <br/>
          <InfoBigText>휴무일</InfoBigText>
          <br/>
          <br/>
          <InfoSmallText> 휴무일: 일, 월</InfoSmallText>
        </div>
        <div>
          <img alt = ""
          src = "img/insta.PNG"
          width="40"
          height="40"
          />
          <br/>
          <InfoBigText>인스타그램</InfoBigText>
          <br/>
          <br/>
          <InfoSmallText onClick={() => window.open('https://www.instagram.com/joocake_com', '_blank')}>https://www.instagram.com/joocake_com</InfoSmallText>
        </div>
      </div>
    </center>

    </div>
    );
}
export default DetailPage;