import React from "react";
import styled from "styled-components";
import PizzaHut from "../../assets/images/PizzaHut.png";
import Xiaomi from "../../assets/images/Xiaomi.png";
import FrameFeatured from "../../assets/svg/FrameFeatured";
import DB from "../../assets/images/DB.png";
import { Button, Space } from "antd";
import FrameGenericCoupon from "../../assets/svg/FrameGenericCoupon";
import FrameGenericCouponLazada from "../../assets/svg/FrameGenericCouponLazada";
import MothersDay from "../../assets/images/MothersDay.png";
import Logo from "../../assets/svg/Logo/Logo";
import LinkedInSvg from "../../assets/svg/LinkedInSvg/LinkedInSvg";
import FbSvg from "../../assets/svg/FbSvg/FbSvg";
import InstagramSvg from "../../assets/svg/InstagramSvg/InstagramSvg";
import LogoCQ from "../../assets/images/LogoCQ.png";
import CheckoutBlog from "../../assets/svg/CheckoutBlog";

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center !important;
`;
const StyledContent = styled.div`
	display: flex;
	flex-direction: row;
`;

const StyledRightPanel = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between !important;
`;

const StyledBtn = styled.div`
	font-family: Arial;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
`;

const Component = () => {
	return (
		<>
			<StyledContainer>
				<StyledContent>
					<img src={LogoCQ} alt="pic" className="w-[50%] mr-[20%]" />
					<StyledRightPanel>
						<div className="text-justify w-[50%] flex flex-col justify-center pr-[10%] ">
							<LinkedInSvg />
						</div>

						<div className="text-justify w-[50%] flex flex-col justify-center pr-[10%]">
							<FbSvg className="cursor-pointer" />
						</div>

						<div className="text-justify w-[50%] flex flex-col justify-center pr-[10%]">
							<InstagramSvg className="cursor-pointer" />
						</div>
					</StyledRightPanel>
				</StyledContent>
			</StyledContainer>
		</>
	);
};

export default Component;
