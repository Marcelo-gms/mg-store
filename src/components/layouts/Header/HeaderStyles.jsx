import { styled } from "styled-components";

export const Container = styled.header`
  width: 100%;

  min-height: 10vh;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 11;

  color: #000;
`;

export const Navbar = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 20px 0 0;
`;

export const Logo = styled.div`
  max-width: 100px;
  max-height: 100px;

  a {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
  }
`;

export const ContainerMenuGroup = styled.div`
  display: flex;
  gap: 30px;

  .iconMobileOpen {
    font-size: 1.3em;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

export const Navlist = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  li {
  }
`;

export const NavlistMobile = styled.ul`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  height: 100vh;
  background-color: #fff;
  z-index: 10;
  overflow: hidden;
  opacity: 0;
  animation: menuMobile 0.5s forwards ease-out;

  @keyframes menuMobile {
    from {
      opacity: 0;
      width: -600px;
    }
    to {
      opacity: 1;
      max-width: 600px;
    }
  }

  svg {
    position: absolute;
    top: 35px;
    right: 18px;
    font-size: 1.5em;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const ShoppingCart = styled.div`
  font-size: 1.2em;
  position: relative;
  cursor: pointer;

  span {
    width: 100%;
    text-align: center;
    position: absolute;
    right: -10px;
    top: -15px;
    font-size: 0.7em;
    border-radius: 50%;
    padding: 3px;
    background-color: #fff;
    color: #af89ffff;
  }

  svg {
    font-size: 1.2em;
    transition: all.5s;

    &:hover{
      color: #af89ffff;
    }
  }

  .visible {
    display: block;
  }
  .hidde {
    display: none;
  }
`;
