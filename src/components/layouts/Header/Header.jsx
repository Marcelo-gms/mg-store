import * as C from "./HeaderStyles";

// hooks
import { useState, useContext } from "react";
import { cartContext } from "../../../contexts/CartContext";

// router dom
import { NavLink, Link } from "react-router-dom";

//icons
import { AiOutlineShoppingCart, AiFillCarryOut } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [show, setShow] = useState(false);

  const { showCart, handleShowCart } = useContext(cartContext);

  const handleShowMenu = () => {
    setShow(!show);
  };
  return (
    <C.Container>
      <C.Navbar>
        <C.Logo>
          <Link to="/">
            <img src="/logo-1.png" alt="shop logo" />
          </Link>
        </C.Logo>

        <C.ContainerMenuGroup>
          <C.Navlist>
            <li>
              <NavLink to="/store">Loja</NavLink>
            </li>
          </C.Navlist>

          <C.ShoppingCart>
            <span>1</span>
            <AiOutlineShoppingCart onClick={() => handleShowCart()} />
          </C.ShoppingCart>

          <GiHamburgerMenu
            className="iconMobileOpen"
            onClick={handleShowMenu}
          />

          <C.NavlistMobile show={show ? "show" : ""}>
            <IoClose onClick={handleShowMenu} />
            <li>
              <NavLink to="category">Loja</NavLink>
            </li>
          </C.NavlistMobile>
        </C.ContainerMenuGroup>
      </C.Navbar>
    </C.Container>
  );
};

export default Header;
