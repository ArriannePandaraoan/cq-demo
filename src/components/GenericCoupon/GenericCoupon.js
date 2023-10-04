import React from "react";
import styled from "styled-components";
import PizzaHut from "../../assets/images/PizzaHut.png";
import FrameFeatured from "../../assets/svg/FrameFeatured";
import DB from "../../assets/images/DB.png";
import { Button, Space } from "antd";

const StyledContainer = styled.div`
	font-family: Arial;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
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
`;

const StyledInFrameTxt = styled.div`
	font-family: Trocchi;
	// width: 100%;
	font-size: 24px;
	text-align: left;
`;

const StyledInFrameTxtInner = styled.div`
	font-family: Trocchi;
	// max-width: fit-content;
	width: 70%;
	font-size: 16px;
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
`;

const Component = () => {
	return (
		<>
			<StyledContainer>
				<div className="relative">
					<div className="bg-[transparent] relative text-[#E9F0FF]">
						<div className="border-dashed border-2 border-gray-400 pt-[3%] pb-[3%] pl-[30px] ">
							<StyledInFrame>
								<img
									src={PizzaHut}
									alt="pic"
									className="w-[30%] mr-[5%] ml-[0%]"
								/>
								<StyledInFrameTxt>
									<span className="text-[#4DAF8C]">Hot Deals ₱499</span>
									<StyledInFrameTxtInner>
										<span className="text-[#000000]">
											<br></br>
											Get Pizza Hut Hot Deals 499. 2 Large Pan pizza for the
											price of one. Available in new flavors.
										</span>
									</StyledInFrameTxtInner>
								</StyledInFrameTxt>

								<StyledInFrameLink>
									<span className="text-[#ffffff]">See Promo Code</span>
								</StyledInFrameLink>
							</StyledInFrame>
						</div>
					</div>
				</div>

				{/* <div className="absolute mt-[-9%] ml-[1.5%] z-[-100] w-[50%]">
					<div className="bg-[#E9F0FF] text-[#E9F0FF]">
						<div className="pt-[3%] pb-[3%] pl-[30px] ">
							<StyledInFrame>
								<img
									src={PizzaHut}
									alt="pic"
									className="w-[30%] mr-[5%] ml-[0%] opacity-0"
								/>
								<StyledInFrameTxt>
									<span className="text-[#4DAF8C] opacity-0">
										Hot Deals ₱499
									</span>
									<StyledInFrameTxtInner>
										<span className="text-[#000000] opacity-0">
											<br></br>
											Get Pizza Hut Hot Deals 499. 2 Large Pan pizza for the
											price of one. Available in new flavors.
										</span>
									</StyledInFrameTxtInner>
								</StyledInFrameTxt>

								<StyledInFrameLink className="opacity-0">
									<span className="text-[#ffffff] opacity-0" id="btn-fc">
										See Promo Code
									</span>
								</StyledInFrameLink>
							</StyledInFrame>
						</div>
					</div>
				</div> */}
			</StyledContainer>
		</>
	);
};

export default Component;
