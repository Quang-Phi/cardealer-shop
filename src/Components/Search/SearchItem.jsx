import { useContext } from "react";
import { MyContext } from "../../Context/MyContext";

export default function (props) {
  const Context = useContext(MyContext)
  return (
    <>
      <li className="search-item">
        <a href="" key={props.searchItem.id} onClick={()=>{Context.handleLinkDetail(props.searchItem)}} className="search-product">
          <img src={props.searchItem.src[0]} alt="" />
          <div className="search-product__info">
            <h3 className="search-product__name">{props.searchItem.name}
            </h3>
            <p className="search-product__feature">
              <i className="fas fa-calendar-alt"></i>
              <span>{props.searchItem.year}</span>
            </p>
            <p className="search-product__price">
              <i className="fa-solid fa-money-bill-wave"></i>
              <span>{props.searchItem.price}</span>
            </p>
          </div>
        </a>
      </li>
    </>
  );
}
