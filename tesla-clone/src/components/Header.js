import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  return (
    <Container>
      <a>
        <img src="images/logo.svg" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model Y</a>
        <a href="#">Model X</a>
        <a href="#">Model 3</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
      </RightMenu>
      <CustomMenu />
      <BurgerNav>
        <CloseWrapper>
          <CustomClose />
        </CloseWrapper>
        <li>
          <a href="#">Vehicles</a>
        </li>
        <li>
          <a href="#">Energy</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>

        <li>
          <a href="#">Accessories</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  //   width: fill;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: bold;
    text-transform: uppercase;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: bold;
    text-transform: uppercase;
    margin-right: 10px;
    padding: 0 10px;
  }
  margin-left: auto;
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 200px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  text-align: start;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  //   position: fixed;
  //   top: 20px;
  //   right: 20px;
  display: flex;
  justify-content: flex-end;
`;
