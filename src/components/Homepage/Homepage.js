import React, { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import FeaturedCoupon from "../../components/FeaturedCoupon";
import styled from "styled-components";
import HeroImg from "../../assets/images/HeroImg.png";
import LatestDeals from "../LatestDeals";
import GenericCoupon from "../GenericCoupon";

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
	margin: 5% 0% 0% 0%;
	width: 100%;
	padding: 3%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const StyledContainerGenericCoupon = styled.div`
	margin: 0% 0% 2% 0%;
	// background-color: green;
	width: 100%;
	padding: 3%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const StyledContainerGenericCouponInner = styled.div`
	margin: 0% 0% 2% 0%;
	width: 60%;
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

			<StyledContainerGenericCoupon>
				<StyledContainerGenericCouponInner>
					<GenericCoupon />
				</StyledContainerGenericCouponInner>
			</StyledContainerGenericCoupon>
		</>
	);
};

export default Component;
