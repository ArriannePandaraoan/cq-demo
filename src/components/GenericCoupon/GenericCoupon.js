import React from "react";
import styled from "styled-components";
import PizzaHut from "../../assets/images/PizzaHut.png";
import FrameGenericCoupon from "../../assets/svg/FrameGenericCoupon";

// const StyledContainer = styled.div`
// 	font-family: Arial;
// 	font-size: 24px;
// 	font-style: normal;
// 	font-weight: 700;
// `;

const StyledContainer = styled.div`
	position: absolute;
	z-index: 100;
`;

const StyledInFrame = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	font-family: Arial;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	width: 100%;
	// background-color: pink;
	// padding-left: 10px;
	justify-content: space-around;
`;

const StyledInFrameTxt = styled.div`
	font-family: Trocchi;
	font-size: 24px;
	text-align: left;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	// background-color: blue;
	width: 400px;
`;

const StyledInFrameTxtInner = styled.div`
	font-family: Trocchi;
	// max-width: fit-content;
	width: 100%;
	font-size: 16px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	// background-color: green;
`;

const StyledInFrameLink = styled.div`
	font-family: Space Mono;
	font-size: 16px;
	align-items: center;
	text-align: center;
	cursor: pointer;
	background-color: #4daf8c;
	border: 3px dashed black;
	padding: 10px;
	display: flex;
	flex-direction: column;
	width: 190px;
	justify-content: space-around;
`;

const StyledLogo = styled.div`
	width: 200px;
	margin-right: 7%;
	margin-left: 2%;
	@media screen and (max-width: 1680px) {
		width: 150px;
	}
`;

const Component = () => {
	return (
		<>
			<FrameGenericCoupon />

			<StyledContainer>
				<StyledInFrame>
					<StyledLogo>
						<img src={PizzaHut} alt="pic" />
					</StyledLogo>

					<StyledInFrameTxt className="mr-[5%]">
						<span className="text-[#4DAF8C]">Hot Deals ₱499</span>
						<StyledInFrameTxtInner>
							<span className="text-[#000000]">
								<br></br>
								Get Pizza Hut Hot Deals 499. 2 Large Pan pizza for the price of
								one.
							</span>
						</StyledInFrameTxtInner>
					</StyledInFrameTxt>

					<StyledInFrameLink className="">
						<span className="text-[#ffffff]">See Promo Code</span>
					</StyledInFrameLink>
				</StyledInFrame>
			</StyledContainer>
		</>
	);
};

export default Component;
