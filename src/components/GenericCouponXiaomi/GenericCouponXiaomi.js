import React from "react";
import styled from "styled-components";
import Xiaomi from "../../assets/images/Xiaomi.png";
import FrameGenericCouponLazada from "../../assets/svg/FrameGenericCouponLazada";

const StyledContainer = styled.div`
	position: absolute;
	z-index: 100;
`;

const StyledFlexContainer = styled.div`
	display: flex;
	width: 900px;
	justify-content: space-around;
	@media screen and (max-width: 1200px) {
		width: 700px;
	}
	@media screen and (max-width: 900px) {
		width: 650px;
	}
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
`;

const StyledInFrameTxt = styled.div`
	font-family: Trocchi;
	font-size: 24px;
	text-align: left;
	display: flex;
	flex-direction: column;
	// background-color: blue;
	width: 400px;
	@media screen and (max-width: 1200px) {
		width: 300px;
	}
`;

const StyledInFrameTxtInner = styled.div`
	font-family: Trocchi;
	// max-width: fit-content;
	width: 100%;
	font-size: 16px;
	display: flex;
	flex-direction: column;
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
	height: fit-content;
	}
`;

const StyledLogo = styled.div`
	align-self: center;
	align-items: center;
	justify-content: center !important;
	text-align: center;
	@media screen and (max-width: 1600px) {
		width: 120px;
	}
`;

const StyledBr = styled.div`
	display: flex;
	@media screen and (max-width: 1440px) {
		display: none;
	}
`;

const StyledBrFiller = styled.div`
	display: none;
	@media screen and (max-width: 1440px) {
		display: flex;
		margin-bottom: 4%;
	}
`;

const StyledLinkedTxtContainer = styled.div`
	display: flex;
	align-items: center;
`;

const StyledLogoContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 150px;
`;

const StyledFrame = styled.div`
	@media screen and (max-width: 1200px) {
		display: flex;
		width: 800px;
		justify-content: center;
	}
	@media screen and (max-width: 900px) {
		display: flex;
		width: 700px;
		justify-content: center;
	}
`;

const Component = () => {
	return (
		<>
			<StyledFrame>
				<FrameGenericCouponLazada />
			</StyledFrame>

			<StyledContainer>
				<StyledInFrame>
					<StyledFlexContainer>
						<StyledLogoContainer>
							<StyledLogo>
								<img src={Xiaomi} alt="pic" />
							</StyledLogo>
						</StyledLogoContainer>

						<StyledInFrameTxt>
							<span className="text-[#4DAF8C]">33% off</span>
							<StyledInFrameTxtInner>
								<span className="text-[#000000]">
									<StyledBr>
										<br></br>
									</StyledBr>
									<StyledBrFiller></StyledBrFiller>
									Buy XIAOMI Redmi Note 10 4GB RAM 64GB ROM Now
								</span>
							</StyledInFrameTxtInner>
						</StyledInFrameTxt>

						<StyledLinkedTxtContainer>
							<StyledInFrameLink className="">
								<span className="text-[#ffffff]">See Promo Code</span>
							</StyledInFrameLink>
						</StyledLinkedTxtContainer>
					</StyledFlexContainer>
				</StyledInFrame>
			</StyledContainer>
		</>
	);
};

export default Component;
