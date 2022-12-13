import { useContext } from "react";
import { MyContext } from "../../Context/MyContext";
import { handleRemoveCartItem } from "../../utils";

export default function (props) {
  const Context = useContext(MyContext);
  return (
    <>
      <a
        href=""
        key={props.cartElement.id}
        onClick={() => {
          Context.handleLinkDetail(props.cartElement);
        }}
        className="favourite-item"
      >
        <div className="favourite-product">
          <img src={props.cartElement.src[0]} alt="" />
          <div className="favourite-product__info">
            <h3 className="favourite-product__name">
              {props.cartElement.name}
            </h3>
            <p className="favourite-product__price">
              {props.cartElement.price}
            </p>
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault()
              handleRemoveCartItem(
                Context.cart,
                Context.setCart,
                props.cartElement
              );
            }}
            className="favourite-remove-item"
          >
            <i className="fa-solid fa-heart-circle-minus"></i>
          </div>
        </div>
      </a>
    </>
  );
}
