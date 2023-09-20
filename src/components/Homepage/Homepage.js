import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import FeaturedCoupon from "../../components/FeaturedCoupon";
import styled from "styled-components";
import HeroImg from "../../assets/images/HeroImg.png";
import LatestDeals from "../LatestDeals";

const StyledImg = styled.div`
  margin-top: 5%;
`;

const StyledContainer = styled.div`
  margin: 5% 0% 5% 0%;
  width: 100%;
  padding: 3%;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledContainerNoBgColor = styled.div`
  margin: 5% 0% 5% 0%;
  width: 100%;
  padding: 3%;
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

      <StyledContainerNoBgColor>
        <LatestDeals />
      </StyledContainerNoBgColor>
    </>
  );
};

export default Component;
