import Loading from "../../Loading/Loading";
import "./IndexCSS/banner.scss";
import "./IndexCSS/content.scss";
import "../../Responsive/index-rps.scss";
import "../../Responsive/main-rps.scss";
import TabNavItem from "../../Tab/TabNavItem";
import TabContent from "../../Tab/TabContent";
import Slide from "./Slide/Slide";
import MapData from "../../Product/MapData";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { useContext, useState } from "react";
import { MyContext } from "../../../Context/MyContext";
import useSlideImgBasic from "../../../Hooks/useSlideImgBasic";
import useFilterData from "../../../Hooks/useFilterData";
import { NavLink } from "react-router-dom";
import { handleOpen } from "../../../utils";

export default function (props) {
  const Context = useContext(MyContext);

  const [vidBanerOpen, setVidBanerOpen] = useState(false);

  /* banner Slide */
  const imgs = [
    {
      id: "1",
      img: "https://i.postimg.cc/4xB1wHW2/slider-1.webp",
    },
    {
      id: "2",
      img: "https://i.postimg.cc/8z1Hhmmr/slider-2.webp",
    },
    {
      id: "3",
      img: "https://i.postimg.cc/BQ5pLVH0/slider-3.webp",
    },
  ];

  const [imgActive, imgLeft, imgRight] = useSlideImgBasic(imgs);
  /*  */

  const [
    listLeftFilter,
    listRightFilter,
    listAudi,
    listBMW,
    listPorcher,
    listMaserati,
  ] = useFilterData(Context.listCar);
  /*  */
  return (
    <div id="index-page">
      <Header />
      <section id="banner-index">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-8">
              <div className="banner-left">
                <div className="banner-rate">
                  <div className="banner-rate__left">
                    <div className="banner-rate__left-star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <p>5.0</p>
                    </div>
                    <div className="banner-rate__left-count">
                      <p>Base on 9B ratings</p>
                    </div>
                  </div>
                  <div className="banner-rate__author">
                    <img
                      src="https://i.postimg.cc/Nfvb0cyD/author.png"
                      alt=""
                    />
                    <div className="banner-rate__author-text">
                      <p>power elite</p>
                      <p>author product</p>
                    </div>
                  </div>
                </div>

                <div className="banner-content">
                  <p className="banner-reason-title">
                    the best
                    <span>car dealer</span>
                    in the world
                  </p>
                  <p className="banner-content__text">
                    for Auto Dealers, classNameified Listing, Auto Rental,
                    Boats, Repair Services and Motorcycles Dealers.
                  </p>
                </div>

                <div className="banner-btn">
                  <NavLink className="banner-btn__link" to="/products" end>
                    <button>
                      <i className="fa-solid fa-car"></i>
                      <span>view all</span>
                    </button>
                  </NavLink>
                  <button onClick={() => handleOpen(vidBanerOpen, setVidBanerOpen)}>
                    <i className="fa-regular fa-circle-play"></i>
                    <span>watch video</span>
                  </button>
                </div>

                <div className={`banner-video ${vidBanerOpen ? "active" : ""}`}>
                  <div className="banner-video-overlay">
                    <button 
                    onClick={()=>setVidBanerOpen(false)}
                    className="banner-video__close">
                      <i className="fa-solid fa-x"></i>
                    </button>
                  </div>
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/7L1GE2zMqeg?start=0&rel=0&autoplay=1&loop=1&playlist=7L1GE2zMqeg"
                      title="My video"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="banner-right">
                <div className="banner-imgs">
                  <Slide
                    imgs={imgs}
                    imgActive={imgActive}
                    imgLeft={imgLeft}
                    imgRight={imgRight}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article id="content-index">
        <section id="sale">
          <div className="container">
            <div className="product-header ">
              <p>Best Choice</p>
              <h2 className="product-header__title">Featured Listings</h2>
            </div>
            {Context.loading ? (
              <Loading />
            ) : (
              <div className="sale-box">
                <div className="sale-box__left">
                  <MapData listCar={listLeftFilter} />
                </div>

                <div className="sale-box__right">
                  <MapData listCar={listRightFilter} />
                </div>
              </div>
            )}
          </div>
        </section>

        <section id="product">
          <div className="container">
            <div className="product-wraper">
              <div className="product-header">
                <h2 className="product-header__title">Popular Makes</h2>
                <div className="product-header__tabs">
                  <TabNavItem id="tab1">
                    <span>Audi</span>
                  </TabNavItem>
                  <TabNavItem id="tab2">
                    <span>BMW</span>
                  </TabNavItem>
                  <TabNavItem id="tab3">
                    <span>Porcher</span>
                  </TabNavItem>
                  <TabNavItem id="tab4">
                    <span>Maserati</span>
                  </TabNavItem>
                </div>
              </div>

              {props.loading ? (
                <Loading />
              ) : (
                <>
                  <div className="product-main">
                    <TabContent id="tab1" listProducts={listAudi} />
                    <TabContent id="tab2" listProducts={listBMW} />
                    <TabContent id="tab3" listProducts={listPorcher} />
                    <TabContent id="tab4" listProducts={listMaserati} />
                  </div>
                  <div className="product-btn-wrap">
                    <NavLink to="/products">
                      <button className="product-btn">
                        <span>VIEW ALL</span>
                      </button>
                    </NavLink>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        <section id="reason">
          <div className="container">
            <div className="reason-wraper">
              <div className="reason-title">
                <h2>Why Choose Us</h2>
                <p>
                  We can help with your financing plan, we can offer some tips
                  and tricks. Drive off with this dream car of yours regardless
                  of your credit history.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="reason-box">
                    <div className="reason-box__heading">
                      <img
                        src="https://i.postimg.cc/bJ2HzCp4/customer-1.jpg"
                        alt=""
                        className="reason-box__heading-img"
                      />
                    </div>

                    <div className="reason-box__content">
                      <div className="reason-star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>

                      <div className="reason-text">
                        <p>
                          A great experience, plenty of useful information given
                          and no pressure put on me to buy. Helpful and friendly
                          service.
                        </p>
                      </div>

                      <div className="reason-footer">
                        <p>John Myers</p>
                        <span>Happy Customer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="reason-box">
                    <div className="reason-box__heading">
                      <img
                        src="https://i.postimg.cc/dQrmpxWy/customer-2.jpg"
                        alt=""
                        className="reason-box__heading-img"
                      />
                    </div>

                    <div className="reason-box__content">
                      <div className="reason-star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>

                      <div className="reason-text">
                        <p>
                          Their committed sales staff strive to find the right
                          model for every customer to suit their lifestyle and
                          budget. 5-star!
                        </p>
                      </div>

                      <div className="reason-footer">
                        <p>Alana Dyan</p>
                        <span>Happy Customer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="reason-box">
                    <div className="reason-box__heading">
                      <img
                        src="https://i.postimg.cc/k5HvP33x/customer-3.jpg"
                        alt=""
                        className="reason-box__heading-img"
                      />
                    </div>

                    <div className="reason-box__content">
                      <div className="reason-star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>

                      <div className="reason-text">
                        <p>
                          A great experience, plenty of useful information given
                          and no pressure put on me to buy. Helpful and friendly
                          service. 5-star!
                        </p>
                      </div>

                      <div className="reason-footer">
                        <p>Kate Stewart</p>
                        <span>Happy Customer</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="reason-box">
                    <div className="reason-box__heading">
                      <img
                        src="https://i.postimg.cc/bJ2HzCp4/customer-1.jpg"
                        alt=""
                        className="reason-box__heading-img"
                      />
                    </div>

                    <div className="reason-box__content">
                      <div className="reason-star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>

                      <div className="reason-text">
                        <p>
                          A great experience, plenty of useful information given
                          and no pressure put on me to buy. Helpful and friendly
                          service.
                        </p>
                      </div>

                      <div className="reason-footer">
                        <p>John Myers</p>
                        <span>Happy Customer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <div className="about-box">
              <div className="row">
                <div className="col-lg-6">
                  <div className="about-left">
                    <div className="about-left__info">
                      <h2>
                        THE BEST CAR DEALER
                        <span>IN THE WORLD.</span>
                      </h2>
                      <p>
                        Award-winning, family owned dealership of new and
                        pre-owned vehicles with several locations across the
                        city. Lowest prices and the best customer service
                        guaranteed.
                      </p>
                    </div>
                    <button className="about-left__btn">
                      <span>Read More</span>
                    </button>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="about-right">
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/embed/7L1GE2zMqeg?start=0&rel=0&autoplay=1&loop=1&playlist=7L1GE2zMqeg"
                        title="My video"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
}
