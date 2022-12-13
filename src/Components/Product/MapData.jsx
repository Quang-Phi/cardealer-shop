import ProductIndex from "./ProductOfIndexPage";

export default function (props) {
  return (
    <>
      {props.listCar.map((element) => {
        return <ProductIndex key={element.id} product={element} />;
      })}
    </>
  );
}
