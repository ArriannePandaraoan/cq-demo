import React from "react";
import styled from "styled-components";
import MothersDayFlower from "../../assets/images/MothersDayFlower.png";
import FrameFeatured from "../../assets/svg/FrameFeatured";
import DB from "../../assets/images/DB.png";
import { Button, Space } from "antd";

const StyledContainer = styled.div`
  position: absolute;
  z-index: 100;
  // background-color: blue;
`;

const StyledInFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: Arial;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
`;

const StyledInFrameTxt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
`;

const Component = () => {
  return (
    <>
      <FrameFeatured />

      <StyledContainer>
        <StyledInFrame>
          <img
            src={MothersDayFlower}
            alt="pic"
            className="w-[40%] mr-[10%] p-[5%]"
          />
          <StyledInFrameTxt>
            <img src={DB} alt="pic" className="w-[20%]" />
            Designer Blooms: Half Dozen Roses
            <br />
            <span className="bg-white">Get 30% Off</span>
            <br />
            <Button
              id="btn-fc"
              className="mt-[-3%] font-sans text-white bg-[#05B2CD] font-bold hover:text-white"
            >
              Visit Store
            </Button>
          </StyledInFrameTxt>
        </StyledInFrame>
      </StyledContainer>
    </>
  );
};

export default Component;
