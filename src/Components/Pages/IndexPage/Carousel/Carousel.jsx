import Slider from "react-slick";
import ProductOfIndexPage from "../../../Product/ProductOfIndexPage";
import "./carousel.scss";

export default function (props) {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {props.listProducts.map((element) => {
        return <ProductOfIndexPage key={element.id} product={element} />;
      })}
    </Slider>
  );
}
