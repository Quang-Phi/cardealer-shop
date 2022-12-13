import { useContext, useState } from "react";
import { MyContext } from "../../Context/MyContext";
import { checkInCart, handleAddToCart } from "../../utils";

export default function (props) {
  const Context = useContext(MyContext);
  return (
    <>
      <div className="car-item-box">
        <div className="row">
          <div className="col-lg-4 col-md-full col-12">
            <div className="car-box__image">
              <img src={props.element.src[0]} alt="" />
              <div className="car-img-overlay">
                <ul className="overlay-list">
                  <li className="overlay-list__item">
                    <a
                      key={props.element.id}
                      onClick={() => {
                        Context.handleLinkDetail(props.element);
                      }}
                      className="overlay-list__item-link"
                      href=""
                    >
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </li>
                  <li className="overlay-list__item">
                    <i className="fa-sharp fa-solid fa-expand"></i>
                  </li>
                  <li className="overlay-list__item">
                    <i className="fa-brands fa-cc-visa"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-full col-12">
            <div className="car-info">
              <div className="product-favourite">
                <div
                  onClick={() => {
                    handleAddToCart(
                      Context.cart,
                      Context.setCart,
                      props.element
                    );
                  }}
                  className={`favourite-add ${
                    checkInCart(Context.cart, props.element) ? "unactive" : ""
                  }`}
                >
                  <i className="fa-solid fa-heart-circle-plus"></i>
                </div>
                <div
                  className={`favourite-added ${
                    checkInCart(Context.cart, props.element) ? "" : "unactive"
                  }`}
                >
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>
              <div className="car-info__title">
                <a
                  key={props.element.id}
                  onClick={() => {
                    Context.handleLinkDetail(props.element);
                  }}
                  className="car-info__title-link"
                  href=""
                >
                  {props.element.name}
                </a>
                <p>{props.element.describe}</p>
              </div>
              <div className="car-info__price">
                <span className="old-price">{props.element.old_price}</span>
                <span className="new-price">{props.element.price}</span>
              </div>
              <div className="car-info__feature">
                <ul>
                  <li className="features">
                    <i className="fas fa-calendar-alt"></i>
                    <span className="feature">
                      {props.element.year}
                    </span>
                  </li>
                  <li className="features">
                    <i className="fa-solid fa-gas-pump"></i>
                    <span className="feature">
                      {props.element.body_style}
                    </span>
                  </li>
                  <li className="features">
                    <i className="fa-solid fa-car"></i>
                    <span className="feature">
                      {props.element.fuel}
                    </span>
                  </li>
                  <li className="features">
                    <i className="fa-solid fa-car"></i>
                    <span className="feature">
                      {props.element.gear}
                    </span>
                  </li>
                </ul>
              </div>
              <div
                key={props.element.id}
                onClick={() => {
                  Context.handleLinkDetail(props.element);
                }}
                className="car-info__btn"
              >
                <a className="car-info__btn-link" href="">
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
