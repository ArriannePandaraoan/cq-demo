import React from "react";
import styled from "styled-components";
import PizzaHut from "../../assets/images/PizzaHut.png";
import Xiaomi from "../../assets/images/Xiaomi.png";
import Apple from "../../assets/images/Apple.png";
import FrameFeatured from "../../assets/svg/FrameFeatured";
import DB from "../../assets/images/DB.png";
import { Button, Space } from "antd";
import FrameGenericCoupon from "../../assets/svg/FrameGenericCoupon";
import FrameGenericCouponAbenson from "../../assets/svg/FrameGenericCouponAbenson";

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
	width: 220px;
	margin-left: 70px;
	justify-content: flex-end;
`;

const Component = () => {
	return (
		<>
			<FrameGenericCouponAbenson />

			<StyledContainer>
				<StyledInFrame>
					<img src={Apple} alt="pic" className="w-[100px] mr-[12%]" />

					<StyledInFrameTxt className="mr-[4%]">
						<span className="text-[#4DAF8C]">Take 6% off</span>
						<StyledInFrameTxtInner>
							<span className="text-[#000000]">
								<br></br>
								Buy Iphone 11 now at Abenson Store
							</span>
						</StyledInFrameTxtInner>
					</StyledInFrameTxt>

					<StyledInFrameLink>
						<span className="text-[#ffffff]">See Promo Code</span>
					</StyledInFrameLink>
				</StyledInFrame>
			</StyledContainer>
		</>
	);
};

export default Component;
