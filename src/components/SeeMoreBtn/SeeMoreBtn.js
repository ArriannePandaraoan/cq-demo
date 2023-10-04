import React from "react";
import styled from "styled-components";
import MothersDayFlower from "../../assets/images/MothersDayFlower.png";
import FrameFeatured from "../../assets/svg/FrameFeatured";
import DB from "../../assets/images/DB.png";
import { Button, Space } from "antd";

const StyledContainer = styled.div`
	font-family: Arial;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
`;

const Component = () => {
	return (
		<>
			<StyledContainer>
				<div className="mt-[-50px] p-[15px] cursor-pointer outline outline-1 bg-[#ffe356]">
					See More
				</div>
			</StyledContainer>
		</>
	);
};

export default Component;
