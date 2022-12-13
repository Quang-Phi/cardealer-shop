import { useContext } from "react";
import { MyContext } from "../../Context/MyContext";
import Carousel from "../Pages/IndexPage/Carousel/Carousel";

export default function (props) {
  const Context = useContext(MyContext);
  return (
    <div className="product-main__review">
      {Context.activeTab === props.id ? (
        <Carousel listProducts={props.listProducts} />
      ) : null}
    </div>
  );
}
