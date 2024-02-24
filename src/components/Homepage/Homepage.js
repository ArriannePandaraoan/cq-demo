import React from "react";
import styled from "styled-components";
import HeroImg from "../../assets/images/HeroImg.png";
import LatestDeals from "../../assets/svg/LatestDeals";
import FeaturedCoupon from "../../components/FeaturedCoupon";
import Menu from "../../components/Menu";
import CheckoutBlogContent from "../CheckoutBlogContent";
import Footer from "../Footer";
import GenericCoupon from "../GenericCoupon";
import GenericCouponApple from "../GenericCouponApple";
import GenericCouponFlower from "../GenericCouponFlower";
import GenericCouponXiaomi from "../GenericCouponXiaomi";
import SeeMoreBtn from "../SeeMoreBtn";

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

const StyledContainerFooter = styled.div`
	margin-top: 15%;
	width: 100%;
	padding: 3%;
	background-color: #7a7a7a;
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
	margin-top: -80px;
	margin-bottom: -150px;
	width: 100%;
	padding: 3%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const StyledContainerGenericCouponInner = styled.div`
	// margin: 0% 0% 0% 0%;
	width: 60%;
	overflow: visible;
	padding: 3%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const StyledLatestDeals = styled.div`
	@media screen and (max-width: 1678px) {
		margin-bottom: 3%;
	}
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
				<StyledLatestDeals>
					<LatestDeals />
				</StyledLatestDeals>
			</StyledContainerNoBgColor>

			<StyledContainerGenericCoupon>
				<StyledContainerGenericCouponInner>
					<GenericCoupon />
				</StyledContainerGenericCouponInner>
			</StyledContainerGenericCoupon>

			<StyledContainerGenericCoupon>
				<StyledContainerGenericCouponInner>
					<GenericCouponXiaomi />
				</StyledContainerGenericCouponInner>
			</StyledContainerGenericCoupon>

			<StyledContainerGenericCoupon>
				<StyledContainerGenericCouponInner>
					<GenericCouponApple />
				</StyledContainerGenericCouponInner>
			</StyledContainerGenericCoupon>

			<StyledContainerGenericCoupon>
				<StyledContainerGenericCouponInner>
					<GenericCouponFlower />
				</StyledContainerGenericCouponInner>
			</StyledContainerGenericCoupon>

			<StyledContainerNoBgColor>
				<SeeMoreBtn />
			</StyledContainerNoBgColor>

			<StyledContainer>
				<CheckoutBlogContent />
			</StyledContainer>

			<StyledContainerFooter>
				<Footer />
			</StyledContainerFooter>
		</>
	);
};

export default Component;
