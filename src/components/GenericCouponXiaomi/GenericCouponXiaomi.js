import React from "react";
import styled from "styled-components";
import PizzaHut from "../../assets/images/PizzaHut.png";
import Xiaomi from "../../assets/images/Xiaomi.png";
import FrameFeatured from "../../assets/svg/FrameFeatured";
import DB from "../../assets/images/DB.png";
import { Button, Space } from "antd";
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
	// width: 100%;
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
	background-color: blue;
`;

const StyledInFrameTxtInner = styled.div`
	font-family: Trocchi;
	// max-width: fit-content;
	width: 100%;
	font-size: 16px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background-color: green;
`;

const StyledInFrameLink = styled.div`
	font-family: Space Mono;
	font-size: 16px;
	align-items: center;
	text-align: center;
	cursor: pointer;
	background-color: #4daf8c;
	margin-left: -10%;
	margin-right: 4%;
	width: 15rem;
	border: 3px dashed black;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const StyledInFrameLinkBg = styled.div`
	font-family: Space Mono;
	font-size: 16px;
	align-items: center;
	text-align: center;
	cursor: pointer;
	background-color: #e9f0ff;
	margin-left: -10%;
	margin-right: 4%;
	width: 15rem;
	border: 3px dashed #4daf8ck;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background-color: red;
`;

const Component = () => {
	return (
		<>
			<FrameGenericCoupon />

			<StyledContainer>
				<StyledInFrame>
					<img src={PizzaHut} alt="pic" className="w-[70%] p-[0%]" />
				</StyledInFrame>
			</StyledContainer>
		</>
	);
};

export default Component;
