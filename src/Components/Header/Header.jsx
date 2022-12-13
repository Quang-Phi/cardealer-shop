import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "../../Context/MyContext";
import { handleOpen } from "../../utils";
import CartItem from "../Cart/CartItem";
import "./header.scss";

export default function () {
  const Context = useContext(MyContext);
  /* mobile Menu */
  const [isOpen, setIsOpen] = useState(false);
  /*  */
  return (
    <div id="header">
      <div className="container">
      <nav>
        <div className="nav-content">
          <div className="nav-left">
            <NavLink className="nav-right__item-link" to="/" end>
              <img
                src="https://i.postimg.cc/fL6Cm48w/logo-light-png.webp"
                alt=""
              />
            </NavLink>
          </div>

          <div className="nav-right">
            <ul className="nav-right__list">
              <li className="nav-right__item">
                <NavLink className="nav-right__item-link" to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-right__item">
                <NavLink className="nav-right__item-link" to="/products" end>
                  Car List
                </NavLink>
              </li>
            </ul>
          </div>

          <div id="favourite">
            <div className="favourite-header">
              <span>Favourite</span>
              <i className="fa-solid fa-heart-circle-check"></i>
            </div>

            <div className="favourite-wraper">
              <div className="favourite-content">
                <h3 className="title">Farourite Car List</h3>
                {Context.cart.length === 0 ? (
                  <div className="favourite-empty">
                    <img
                      src="https://i.postimg.cc/kMzx3dbJ/no-cart.png"
                      alt=""
                    />
                  </div>
                ) : (
                  <div className="favourite-list">
                    {Context.cart.map((element) => {
                      return (
                        <CartItem key={element.id} cartElement={element} />
                      );
                    })}
                  </div>
                )}
                <div className="favourite-total">
                  Total:
                  <span>{Context.cart.length}</span>
                  Favourited
                </div>
              </div>
            </div>
          </div>

          <div className="nav-menu nav-mobile">
            <div
              className="nav-menu__icon"
              onClick={() => {
                handleOpen(isOpen, setIsOpen);
              }}
            >
              <i className="fa-solid fa-bars"></i>
            </div>
            <div
              className={`nav-menu__content list-mobile ${
                isOpen ? "active" : ""
              }`}
            >
              <ul className="nav-right__list">
                <li className="nav-right__item nav-item-mobile">
                  <NavLink className="nav-right__item-link" to="/" end>
                    Home
                  </NavLink>
                </li>

                <li className="nav-right__item nav-item-mobile">
                  <NavLink className="nav-right__item-link" to="/products" end>
                    Car List
                  </NavLink>
                </li>

                <li className="nav-right__item nav-item-mobile">
                  <a href="#" className="nav-right__item-link">
                    About us
                  </a>
                </li>

                <li className="nav-right__item nav-item-mobile">
                  <a href="details.html" className="nav-right__item-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </div>
    </div>
  );
}
