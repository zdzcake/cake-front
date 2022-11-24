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

const InfoSmallText2 = styled.button`
  height: 48px;
  width: max;
  background-color: #ffffff;
  font-size: 14px;
  color:#7D756D;
  border-color:#ffffff;
  border:0;
  outline:0;
  font-weight:200;
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
      <div>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoBigText>예약 주의 사항</InfoBigText>
        <br></br>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoSmallText2>-케이크 사진은 보내드리지 않아요!</InfoSmallText2>
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoSmallText2>-별도의 알림문자나 전화를 드리지 않습니다.</InfoSmallText2>
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoSmallText2>-주문서와 입금사항은 안내드린 당일까지만 유효 / 당일에 진행되지 않을 시, 문의 하신 날의 예약이 마감될 수 있습니다.</InfoSmallText2>
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoSmallText2>-노쇼방지를 위해 선불 예약제로 진행하며 현금 계좌이체만 가능합니다.</InfoSmallText2>
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoSmallText2>-법인카드 결제시 미리 선입금 해주신 후 케이크 픽업시 카드결제 하시면 현금으로 교환해드립니다.</InfoSmallText2>
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoSmallText2>-기본초가 아닌 다른 종류의 케이크 초, 고깔모자, 보냉백, 아이스팩은 매장에서 구매 가능하니 상담시 문의주세요!</InfoSmallText2>
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoSmallText2>-생화 추가 시 색상, 종류, 시즌에 따라 가격이 상이하므로 별도 상담요청바랍니다.</InfoSmallText2>
      </div>
      <div>
      <div>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoBigText>주문 시 주의사항</InfoBigText>
        <br></br>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoSmallText2>위 안내사항으로 인한 문제 발생으로 환불 및 교환은 불가능합니다. 꼭꼭 숙지해주세요!!</InfoSmallText2>
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoSmallText2>-아이스팩이나 보냉백에 보관하셔도 1시간 이상 지나면 생크림이 녹기 시작하니 참고 바랍니다.</InfoSmallText2>
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoSmallText2>-케이크 고정핀이 따로 없습니다. 크림으로 고정을 해드리기 때문에 충격이 가해지거나 기울여 이동시 케이크는 망가지게 됩니다. 이동 시 각별히 유의해주세요.</InfoSmallText2>
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoSmallText2>-실제 케이크는 사진과 다소 다를 수 있습니다. 모니터 환경에 따라 색상이 차이 날 수 있으며, 크림케이크이기에 기포나 스패츌러 끝나는 선이 생깁니다.</InfoSmallText2>
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoSmallText2>-수제케이크 특성상 같은 디자인이라도 디테일이 조금씩 다르게 제작됩니다.</InfoSmallText2>
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoSmallText2>-계란, 유제품, 과일, 견과류 등 드시지 못하는 음식재료나 알러지가 있으신분은 꼭 미리 말씀해주세요. (미공지시 추후 발생하는 불상사는 책임지지 않습니다.)</InfoSmallText2>
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoSmallText2>-제작된 케이크는 인스타그램에 (랜덤으로) 업로드 될 수 있습니다. 이는 재 판매로 이어질 수 있으며 원하지 않으실 경우 미리 말씀해주세요 </InfoSmallText2>
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoSmallText2>-생화케이크에 데코되는 생화는 데코용으로 식용이 아닙니다. 반드시 제거후 드시길 바랍니다.</InfoSmallText2>
      </div>
      <div>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoBigText>예약 취소 및 환불 규정</InfoBigText>
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoSmallText2>-예약 7일 전 취소시 : 100% 환불</InfoSmallText2>
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoSmallText2>-예약 7일 이내 취소시 : 위약금 30%(재료 비용 발생)</InfoSmallText2>
        <br/>
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <InfoSmallText2>-예약 3일 전 취소시 : 전액 환불 불가</InfoSmallText2>
      </div>
      <br/>
      <br/>
      <br/>

      </div>
  

    </div>
    );
}
export default DetailPage;