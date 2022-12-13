export default function (props) {
  return (
    <>
      {props.imgs.map((item, i) => {
        return (
          <div
            key={item.id}
            className={`banner-img ${
              i === props.imgActive ? "img--active" : ""
            } ${i === props.imgLeft ? "img--left" : ""} ${
              i === props.imgRight ? "img--right" : ""
            }`}
          >
            <img key={item.id} src={item.img} />
          </div>
        );
      })}
    </>
  );
}
