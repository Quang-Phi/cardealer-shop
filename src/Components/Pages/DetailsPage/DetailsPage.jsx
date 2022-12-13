import Header from "../../Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  checkInCart,
  config,
  handleAddToCart,
  handleOpen,
} from "../../../utils";
import TabDetails from "../../Tab/TabDetails";
import TabNavItem from "../../Tab/TabNavItem";
import "./details.scss";
import "../../Responsive/detail-rps.scss";
import Loading from "../../Loading/Loading";
import Footer from "../../Footer/Footer";
import { useContext } from "react";
import { MyContext } from "../../../Context/MyContext";

export default function (props) {
  const Context = useContext(MyContext);
  const [moreText, setMoreText] = useState(false);


  /* get data product by id*/
  const params = useParams();

  const [product, setProduct] = useState(null);
  const handleFetchData = async () => {
    try {
      const data = await axios.get(`${config.API_URL}/listcar/${params.id}`);
      setProduct(data.data);
    } catch (error) {}
  };
  useEffect(() => {
    handleFetchData();
  }, [params.id]);
  /*  */

  return (
    <div id="details-page">
      {product &&
        (props.loading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <div id="details-main">
              <div className="container">
                <div className="product">
                  <div className="row">
                    <div className="col-lg-7 col-md-full">
                      <div className="left-wraper">
                        <div className="left-content">
                          <div className="product-imgs">
                            <div className="main-imgs">
                              <TabDetails id="tab1">
                                <img src={product.src[1]} alt="" />
                              </TabDetails>

                              <TabDetails id="tab2">
                                <img src={product.src[2]} alt="" />
                              </TabDetails>

                              <TabDetails id="tab3">
                                <img src={product.src[3]} alt="" />
                              </TabDetails>

                              <TabDetails id="tab4">
                                <img src={product.src[4]} alt="" />
                              </TabDetails>

                              <TabDetails id="tab5">
                                <img src={product.src[5]} alt="" />
                              </TabDetails>
                            </div>
                            <div className="product-tabs">
                              <TabNavItem id="tab1">
                                <img src={product.src[1]} alt="" />
                              </TabNavItem>
                              <TabNavItem id="tab2">
                                <img src={product.src[2]} alt="" />
                              </TabNavItem>
                              <TabNavItem id="tab3">
                                <img src={product.src[3]} alt="" />
                              </TabNavItem>
                              <TabNavItem id="tab4">
                                <img src={product.src[4]} alt="" />
                              </TabNavItem>
                              <TabNavItem id="tab5">
                                <img src={product.src[5]} alt="" />
                              </TabNavItem>
                            </div>
                          </div>
                        </div>

                        <div className="left-description">
                          <h1>Description</h1>
                          <div className="left-description__text">
                            <p>
                              How the adventure ended will be seen anon. Aouda
                              was anxious, though she said nothing. As for
                              Passepartout, he thought Mr. Fogg's manoeuvre
                              simply glorious. The captain had said “between
                              eleven and twelve knots,” and the Henrietta
                              confirmed his prediction.
                              <br />
                              <br />
                              <span
                                className={`text-more ${
                                  moreText ? "" : "active"
                                }`}
                              >
                                If, then—for there were “ifs” still—the sea did
                                not become too boisterous, if the wind did not
                                veer round to the east, if no accident happened
                                to the boat or its machinery, the Henrietta
                                might cross the three thousand miles from New
                                York to Liverpool in the nine days, between the
                                12th and the 21st of December. It is true that,
                                once arrived, the affair on board the Henrietta,
                                added to that of the Bank of England, might
                                create more difficulties for Mr. Fogg than he
                                imagined or could desire. During the first days,
                                they went along smoothly enough. The sea was not
                                very unpropitious, the wind seemed stationary in
                                the north-east, the sails were hoisted, and the
                                Henrietta ploughed across the waves like a real
                                trans-Atlantic steamer.
                              </span>
                            </p>
                          </div>
                          <div className="left-description__btn">
                            <button
                              onClick={() => {
                                handleOpen(
                                  moreText,
                                  setMoreText
                                );
                              }}
                              className={`show ${
                                moreText ? "" : "unactive"
                              }`}
                            >
                              Show More
                            </button>
                            <button
                              onClick={() => {
                                handleOpen(
                                  moreText,
                                  setMoreText
                                );
                              }}
                              className={`show show-less ${
                                moreText ? "" : "active"
                              }`}
                            >
                              Show Less
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-5 col-md-full">
                      <div className="right-wraper">
                        <div className="right-clasify">
                          <div className="product-info">
                            <div className="product-name">
                              <h3>{product.name}</h3>
                            </div>
                            <div className="product-features">
                              <span className="features">
                                <p>{product.year}</p>
                                <i className="fas fa-circle dot-red"></i>
                              </span>
                              <span className="features">
                                <p>{product.body_style}</p>
                                <i className="fas fa-circle dot-red"></i>
                              </span>
                              <span className="features">
                                <p>{product.fuel}</p>
                                <i className="fas fa-circle dot-red"></i>
                              </span>
                              <span className="features">
                                <p>{product.gear}</p>
                              </span>
                            </div>
                            <div className="product-prices">
                              <div className="product-price">{product.price}</div>
                              <span className="product-old-price">{product.old_price}</span>
                              <div className="product-favourite">
                                <div
                                  onClick={() => {
                                    handleAddToCart(
                                      Context.cart,
                                      Context.setCart,
                                      product
                                    );
                                  }}
                                  className={`favourite-add ${
                                    checkInCart(Context.cart, product)
                                      ? "unactive"
                                      : ""
                                  }`}
                                >
                                  <i className="fa-solid fa-heart-circle-plus"></i>
                                </div>
                                <div
                                  className={`favourite-added ${
                                    checkInCart(Context.cart, product)
                                      ? ""
                                      : "unactive"
                                  }`}
                                >
                                  <i className="fa-solid fa-heart"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="right-describe">
                          <ul className="describe-list">
                            <li className="describe-list__item">
                              {" "}
                              <p>Make:</p>
                              <span>{product.feature[0]}</span>
                            </li>
                            <li className="describe-list__item">
                              {" "}
                              <p>Model:</p>
                              <span>{product.feature[1]}</span>
                            </li>
                            <li className="describe-list__item">
                              {" "}
                              <p>Color:</p>
                              <span>{product.feature[2]}</span>
                            </li>
                            <li className="describe-list__item">
                              {" "}
                              <p>Drive Type:</p>
                              <span>{product.feature[3]}</span>
                            </li>
                            <li className="describe-list__item">
                              {" "}
                              <p>Tranmisstion:</p>
                              <span>{product.feature[4]}</span>
                            </li>
                            <li className="describe-list__item">
                              {" "}
                              <p>Condition:</p>
                              <span>{product.feature[5]}</span>
                            </li>
                            <li className="describe-list__item">
                              {" "}
                              <p>Years:</p>
                              <span>{product.feature[6]}</span>
                            </li>
                            <li className="describe-list__item">
                              {" "}
                              <p>Fuel Type:</p>
                              <span>{product.feature[7]}</span>
                            </li>
                            <li className="describe-list__item">
                              {" "}
                              <p>Engine Size:</p>
                              <span>{product.feature[8]}</span>
                            </li>
                            <li className="describe-list__item">
                              {" "}
                              <p>Doors:</p>
                              <span>{product.feature[9]}</span>
                            </li>
                            <li className="describe-list__item">
                              {" "}
                              <p>Cylinders:</p>
                              <span>{product.feature[10]}</span>
                            </li>
                            <li className="describe-list__item">
                              {" "}
                              <p>Color:</p>
                              <span>{product.feature[11]}</span>
                            </li>
                            <li className="describe-list__item">
                              {" "}
                              <p>VIN:</p>
                              <span>{product.feature[12]}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="left-description sup-description">
                          <h1>Description</h1>
                          <div className="left-description__text">
                            <p>
                              How the adventure ended will be seen anon. Aouda
                              was anxious, though she said nothing. As for
                              Passepartout, he thought Mr. Fogg's manoeuvre
                              simply glorious. The captain had said “between
                              eleven and twelve knots,” and the Henrietta
                              confirmed his prediction.
                              <br />
                              <br />
                              <span
                                className={`text-more ${
                                  moreText ? "" : "active"
                                }`}
                              >
                                If, then—for there were “ifs” still—the sea did
                                not become too boisterous, if the wind did not
                                veer round to the east, if no accident happened
                                to the boat or its machinery, the Henrietta
                                might cross the three thousand miles from New
                                York to Liverpool in the nine days, between the
                                12th and the 21st of December. It is true that,
                                once arrived, the affair on board the Henrietta,
                                added to that of the Bank of England, might
                                create more difficulties for Mr. Fogg than he
                                imagined or could desire. During the first days,
                                they went along smoothly enough. The sea was not
                                very unpropitious, the wind seemed stationary in
                                the north-east, the sails were hoisted, and the
                                Henrietta ploughed across the waves like a real
                                trans-Atlantic steamer.
                              </span>
                            </p>
                          </div>
                          <div className="left-description__btn">
                            <button
                              onClick={() => {
                                handleOpen(
                                  moreText,
                                  setMoreText
                                );
                              }}
                              className={`show ${
                                moreText ? "" : "unactive"
                              }`}
                            >
                              Show More
                            </button>
                            <button
                              onClick={() => {
                                handleOpen(
                                  moreText,
                                  setMoreText
                                );
                              }}
                              className={`show show-less ${
                                moreText ? "" : "active"
                              }`}
                            >
                              Show Less
                            </button>
                          </div>
                        </div>
                        <div className="right-contact">
                          <button className="right-contact__btn">
                            <i className="fa-solid fa-phone"></i>
                            Call Mr.PHI 0964. 298. 523
                          </button>

                          <button className="right-contact__btn">
                            <i className="fa-brands fa-facebook-messenger"></i>
                            Contact via FaceBook
                          </button>

                          <button className="right-contact__btn">
                            <i className="fa-solid fa-envelope"></i>
                            Send Mail for Us
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </>
        ))}
    </div>
  );
}
