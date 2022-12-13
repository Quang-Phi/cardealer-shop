import { useContext } from "react";
import { MyContext } from "../../Context/MyContext";

export default function (props) {
  const Context = useContext(MyContext)
  return (
    <>
      <div className="product-box">
        <a 
        onClick={()=>Context.handleLinkDetail(props.product)}
        href="" 
        className="product-link">
          <div className="product-image">
            <img src={props.product.src[0]} alt="" />
          </div>

          <div className="product-content">
            <div className="product-name">{props.product.name}</div>
            <div className="product-prices">
              <div className="product-price">{props.product.price}</div>
              <span className="product-old-price">
                {props.product.old_price}
              </span>
            </div>
            <div className="product-info">
              <div className="features">{props.product.year}</div>
              <div className="features">{props.product.body_style}</div>
              <div className="features">{props.product.fuel}</div>
              <div className="features">{props.product.gear}</div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
