import React, { useMemo, useRef, useState } from "react";
import styled from 'styled-components';
import Header from '../components/Header';
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
  width: 450px;
  background-color: #ffffff;
  font-size: 25px;
  color:#7D756D;
  border-color:#ffffff;
  border:0;
  outline:0;
`;

const StyledButton = styled.button`
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



function AuctionPage() {
    const [fileImage, setFileImage] = useState("");
    const photoInput = useRef();
    const handleClick = () => {
        photoInput.current.click();
      };
    
    const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) =>{
    // @ts-ignore
    setFileImage(URL.createObjectURL(event.target.files[0]));
  };

    const deleteFileImage = () =>{
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };
  
    const navigate = useNavigate();
    return(
        <div>
            <Header/>
            <br/>
            <br/>
            <SmallText>카테고리</SmallText>
            <StyledButton1
                onClick={()=>{
                navigate("/CategoryPageDosirak");
                }}>도시락케이크</StyledButton1>
            <StyledButton1
                onClick={()=>{
                navigate("/CategoryPageHeart");
            }}>하트케이크</StyledButton1>
            <StyledButton1
                onClick={()=>{
                navigate("/CategoryPageLetter");
            }}>레터링케이크</StyledButton1>  
            <br/>
            <br/>
            <br/>
            &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <MiddleText>이런 케이크를 원해요!</MiddleText>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <input
                  name="imageUpload"
                  type="file"
                  accept="image/*"
                  onChange={saveFileImage}
                  ref={photoInput}
                  style={{display:'none'}} />
              <div>
                <StyledButton onClick={handleClick}>사진 업로드</StyledButton>
                {fileImage && ( <img alt="sample" src={fileImage}
                                           style={{ margin: "auto" }} /> )}
                <StyledButton style={{
                  width: "80px",
                  height: "35px",
                  cursor: "pointer", }}
                        onClick={() => deleteFileImage()} > 삭제 </StyledButton>
              </div>
              <div>
              {/* <img
                src="img/fork.PNG"
                width="50"
                height="50"/> */}
                <MiddleText>원하는 가격</MiddleText>
                <br/>
                <MiddleText> 요구사항</MiddleText>
                <br/>
              </div>
            </div>

        </div>

    );
}
export default AuctionPage;