import React from "react";
import styled from "styled-components";
import MothersDayFlower from "../../assets/images/MothersDayFlower.png";
import FrameFeatured from "../../assets/svg/FrameFeatured";
import SectionTitle from "../../assets/svg/SectionTitle";
import DB from "../../assets/images/DB.png";
import { Button, Space } from "antd";

const StyledContainer = styled.div`
	font-family: Arial;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
`;

const Component = () => {
	return (
		<>
			<StyledContainer>
				<div className="mt-[0.7%] absolute ml-[0.7%]">
					<div className="bg-[#ffe356] pt-[3%] pb-[3%] pl-[30px] pr-[30px] z-[-1] relative text-[#ffe356]">
						Check out Blog Section
					</div>
				</div>
				<div className="border-solid border-2 border-gray-500 pt-[3%] pb-[3%] pl-[30px] pr-[30px]">
					Check out Blog Section
				</div>
			</StyledContainer>
		</>
	);
};

export default Component;
