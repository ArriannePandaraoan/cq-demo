import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../assets/svg/Logo";

const StyledMenuPadTop = styled.div`
  position: relative;
  z-index: -1;
  margin-top: 4%;
  background-color: #ffe356;
  height: 10px;
`;
const StyledMenuPadBot = styled.div`
  position: relative;
  z-index: -1;
  background-color: #ffe356;
  height: 10px;
`;

const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffe356;
  font-family: Trocchi;
  padding: 10px 10px;
  border: 2px dashed #000000;
  border-left: none;
  border-right: none;
  z-index: -1;
`;

const StyledLogo = styled.div`
  margin-top: -4%;
  margin-bottom: -5%;
  z-index: 100;
`;

const Component = () => {
  return (
    <>
      <StyledMenuPadTop></StyledMenuPadTop>
      <StyledMenu>
        <Link className=" hover:text-blue-600" to={`/archive-v1/`}>
          Home
        </Link>

        <Link className=" hover:text-blue-600" to={`/archive-v1/about`}>
          About
        </Link>

        <Link className=" hover:text-blue-600 " to="/register">
          Category
        </Link>

        <StyledLogo>
          <Logo />
        </StyledLogo>

        <Link className=" hover:text-blue-600 " to={`/archive-v1/about`}>
          Blog
        </Link>

        <Link className=" hover:text-blue-600 " to={`/archive-v1/about`}>
          Stores
        </Link>

        <Link className=" hover:text-blue-600" to={`/archive-v1/about`}>
          Merch
        </Link>
      </StyledMenu>
      <StyledMenuPadBot></StyledMenuPadBot>
    </>
  );
};

export default Component;
