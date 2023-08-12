import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import FeaturedCoupon from "../../components/FeaturedCoupon";
import styled from "styled-components";
import HeroImg from "../../assets/images/HeroImg.png";

const StyledImg = styled.div`
  margin-top: 5%;
`;

const StyledContainer = styled.div`
  margin: 10% 0% 10% 0%;
  width: 100%;
  height: 60vh;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Component = () => {
  return (
    <>
      <Menu />

      <StyledImg>
        <img src={HeroImg} alt="pic" className="w-[100%]" />
      </StyledImg>

      <StyledContainer>
        <FeaturedCoupon />
      </StyledContainer>
    </>
  );
};

export default Component;
