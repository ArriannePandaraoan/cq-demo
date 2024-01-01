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
import CheckoutBlog from "../../assets/svg/CheckoutBlog";

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center !important;
`;

const StyledContent = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly !important;
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
				<CheckoutBlog className="flex justify-center" />
				<StyledContent className="mt-[5%]">
					<img src={MothersDay} alt="pic" />
					<div className="text-justify w-[50%] flex flex-col justify-center">
						<div className="flex flex-row justify-center">
							<b>Happy Mother’s Day, Super Moms!</b>
						</div>
						<div className="mt-[5%]"></div>
						<div className="indent-[50px]">
							Our mothers are the superwomen indeed. They are the true managers,
							the true bosses, and the true presidents in our lives. They
							provide warmth in our household and support us in every way...
						</div>
						<div className="mt-[5%]"></div>
						<div className="flex flex-row justify-center ">
							<StyledBtn>
								<div className="p-[15px] outline outline-1 cursor-pointer">
									<b>Read More</b>
								</div>
							</StyledBtn>
						</div>
					</div>
				</StyledContent>
			</StyledContainer>
		</>
	);
};

export default Component;
