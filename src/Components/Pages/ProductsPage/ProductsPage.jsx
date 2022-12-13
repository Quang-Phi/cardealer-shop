import "./products.scss";
import "../../Responsive/products-rps.scss";
import "../../Responsive/main-rps.scss";
import Loading from "../../Loading/Loading";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { useContext, useEffect } from "react";
import { MyContext } from "../../../Context/MyContext";
import { useState } from "react";
import axios from "axios";
import { config, handleTabActive } from "../../../utils";
import SearchItem from "../../Search/SearchItem";
import { PaginatedItems } from "../../Paginate/Paginate";

export default function (props) {
  const Context = useContext(MyContext);

  const [search, setSearch] = useState([]);
  const [listSearch, setListSearch] = useState([]);

  /* Call API search */
  const handleSearchDataAPI = async () => {
    try {
      if (search.length !== 0) {
        const queryParams = {
          search: search,
        };
        const dataValue = await axios.get(`${config.API_URL}/listcar`, {
          params: queryParams,
        });
        setListSearch(dataValue.data);
        return;
      }
      setListSearch([]);
    } catch (error) {}
  };

  useEffect(() => {
    const timeCallAPI = setTimeout(handleSearchDataAPI, 300);
    return () => {
      clearTimeout(timeCallAPI);
    };
  }, [search]);
  /*  */

  /* Filter by select */
  const [select, setSelect] = useState({
    year: "",
    clasify: "",
    body_style: "",
    fuel: "",
  });
  const [listFilter, setListFilter] = useState([]);

  const handleValueSelect = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newSelect = {
      ...select,
      [name]: value,
    };
    setSelect(newSelect);
  };

  useEffect(() => {
    const handleSearchFilter = async () => {
      const queryParams = {
        ...select
      };
      const dataValue = await axios.get(`${config.API_URL}/listcar`, {
        params: queryParams,
      });
      setListFilter(dataValue.data);
    };
    handleSearchFilter();
  }, [select]);

  console.log(listFilter)
  /*  */

  /* Show more Question  */
  const [questionList, setQuestionList] = useState([]);

  const handleAddQuestion = (e) => {
    const newQuestionList = [...questionList];
    newQuestionList.push(e.target.id);
    setQuestionList(newQuestionList);
  };

  const checkInQuestion = (questionList, questionId) => {
    const Index = questionList.findIndex((element) => {
      return Number(element) === questionId;
    });
    if (Index !== -1) {
      return true;
    }
  };
  const handleRemoveQuestion = (questionList, questionId) => {
      const newQuestionList = [...questionList];
      const Index = questionList.findIndex((element) => {
        return Number(element) === questionId;
      });

    if (Index !== -1) {
      newQuestionList.splice(Index,1)
      setQuestionList(newQuestionList)
      return
    }


      setQuestionList(newQuestionList);
  };

  return (
    <div id="products-page">
      <Header />
      <section id="banner-products">
        <div className="banner-video">
          <video src="./video/banner.mp4" autoPlay loop muted></video>
        </div>
      </section>

      <section id="main-products">
        <div className="container">
          <div className="row">
            <aside className="col-lg-4 col-md-4 col-12">
              <div className="aside-wraper">
                <div className="car-search">
                  <h6 className="title">Cars Search</h6>

                  <div className="search">
                    <input
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                      value={Context.search}
                      type="search"
                      placeholder="Search..."
                      className="search__input"
                    />
                  </div>

                  <div className="car-search__list">
                    {listSearch.length === 0 ? (
                      search == 0 ? (
                        ""
                      ) : (
                        <div className="search-result-wraper">
                          <p>Search Results:</p>
                          <h1 className="search-err">
                            Chúng tôi không tìm thấy kết quả nào cho "{ search }"
                          </h1>
                        </div>
                      )
                    ) : (
                      <div className="search-result-wraper">
                        <ul>
                          {listSearch.map((element) => {
                            return (
                              <SearchItem
                                key={element.id}
                                searchItem={element}
                              />
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="car-filter">
                  <h6 className="title">Cars Filter</h6>

                  <div className="car-filter__total"></div>

                  <button className="car-filter__btn">
                    <a className="car-filter__btn-link" href="">
                      VIEW ALL
                    </a>
                  </button>

                  <div className="car-filter__select">
                    <p>Year:</p>
                    <select
                      name="year"
                      value={select.year}
                      onChange={(e) => {
                        handleValueSelect(e);
                      }}
                      className="select"
                    >
                      <option>{/* Year */}</option>
                      <option>2013</option>
                      <option>2014</option>
                      <option>2015</option>
                      <option>2016</option>
                      <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                    </select>

                    <p>Make:</p>
                    <select
                      name="clasify"
                      value={select.clasify}
                      onChange={(e) => {
                        handleValueSelect(e);
                      }}
                      className="select"
                    >
                      <option>{/* Make */}</option>
                      <option>Audi</option>
                      <option>Bentley</option>
                      <option>BMW</option>
                      <option>Bugatti</option>
                      <option>Caddillac</option>
                      <option>Chervolet</option>
                      <option>Ferrarri</option>
                      <option>McLaren</option>
                      <option>Toyota</option>
                      <option>Land Rover</option>
                    </select>

                    <p>Body Style:</p>
                    <select
                      name="body_style"
                      value={select.body_style}
                      onChange={(e) => {
                        handleValueSelect(e);
                      }}
                      className="select"
                    >
                      <option>{/* Body Style */}</option>
                      <option>Convertible</option>
                      <option>Couple</option>
                      <option>HatchBack</option>
                      <option>Sedan</option>
                      <option>SUV</option>
                      <option>Truck</option>
                      <option>Wagon</option>
                    </select>

                    <p>Fuel Economy:</p>
                    <select
                      name="fuel"
                      value={select.fuel}
                      onChange={(e) => {
                        handleValueSelect(e);
                      }}
                      className="select"
                    >
                      <option>{/* Fuel Economy */}</option>
                      <option>Diesel</option>
                      <option>Petrol</option>
                      <option>Electric</option>
                    </select>
                  </div>

                  <button className="car-filter__btn">FILL</button>
                </div>

                <div className="car-question">
                  <h4 className="title">Prequently Asked Questions</h4>
                  <div className="question-list">
                    <div
                      className={`questtion-list__title ${
                        checkInQuestion(questionList, 1) ? "active" : ""
                      }`}
                    >
                      <p>
                        <i className="fas fa-circle dot-red"></i>
                        What can I expect from Car Dealer?
                      </p>
                      <i
                        id="1"
                        onClick={handleAddQuestion}
                        className={`fa-solid fa-plus icon-plus ${
                          checkInQuestion(questionList, 1) ? "disable" : ""
                        }`}
                      ></i>
                      <i
                        id="1"
                        onClick={()=>{handleRemoveQuestion(questionList,1)}}
                        className={`fa-solid fa-minus icon-minus ${
                          checkInQuestion(questionList, 1) ? "" : "disable"
                        }`}
                      ></i>
                    </div>
                    <div
                      className={`question-list__content ${
                        checkInQuestion(questionList, 1) ? "active" : ""
                      }`}
                    >
                      <p>
                        We can help with your financing plan, we can offer some
                        tips and tricks. Drive off with this dream car of yours
                        regardless of your credit history.
                      </p>
                    </div>
                  </div>
                  <div className="question-list">
                    <div
                      className={`questtion-list__title ${
                        checkInQuestion(questionList, 2) ? "active" : ""
                      }`}
                    >
                      <p>
                        <i className="fas fa-circle dot-red"></i>
                        How far in advand do I need to place my oder?
                      </p>
                      <i
                        id="2"
                        onClick={handleAddQuestion}
                        className={`fa-solid fa-plus icon-plus ${
                          checkInQuestion(questionList, 2) ? "disable" : ""
                        }`}
                      ></i>
                      <i
                        id="2"
                        onClick={()=>{handleRemoveQuestion(questionList,2)}}
                        className={`fa-solid fa-minus icon-minus ${
                          checkInQuestion(questionList, 2) ? "" : "disable"
                        }`}
                      ></i>
                    </div>
                    <div
                      className={`question-list__content ${
                        checkInQuestion(questionList, 2) ? "active" : ""
                      }`}
                    >
                      <p>
                        We can help with your financing plan, we can offer some
                        tips and tricks. Drive off with this dream car of yours
                        regardless of your credit history.
                      </p>
                    </div>
                  </div>
                  <div className="question-list">
                    <div
                      className={`questtion-list__title ${
                        checkInQuestion(questionList, 3) ? "active" : ""
                      }`}
                    >
                      <p>
                        <i className="fas fa-circle dot-red"></i>
                        Is the car buying process complicated?
                      </p>
                      <i
                        id="3"
                        onClick={handleAddQuestion}
                        className={`fa-solid fa-plus icon-plus ${
                          checkInQuestion(questionList, 3) ? "disable" : ""
                        }`}
                      ></i>
                      <i
                        id="3"
                        onClick={()=>{handleRemoveQuestion(questionList,3)}}
                        className={`fa-solid fa-minus icon-minus ${
                          checkInQuestion(questionList, 3) ? "" : "disable"
                        }`}
                      ></i>
                    </div>
                    <div
                      className={`question-list__content ${
                        checkInQuestion(questionList, 3) ? "active" : ""
                      }`}
                    >
                      <p>
                        We can help with your financing plan, we can offer some
                        tips and tricks. Drive off with this dream car of yours
                        regardless of your credit history.
                      </p>
                    </div>
                  </div>
                  <div className="question-list">
                    <div
                      className={`questtion-list__title ${
                        checkInQuestion(questionList, 4) ? "active" : ""
                      }`}
                    >
                      <p>
                        <i className="fas fa-circle dot-red"></i>
                        What if I make a deposit and don't want to buy anymore?
                      </p>
                      <i
                        id="4"
                        onClick={handleAddQuestion}
                        className={`fa-solid fa-plus icon-plus ${
                          checkInQuestion(questionList, 4) ? "disable" : ""
                        }`}
                      ></i>
                      <i
                        id="4"
                        onClick={()=>{handleRemoveQuestion(questionList,4)}}
                        className={`fa-solid fa-minus icon-minus ${
                          checkInQuestion(questionList, 4) ? "" : "disable"
                        }`}
                      ></i>
                    </div>
                    <div
                      className={`question-list__content ${
                        checkInQuestion(questionList, 4) ? "active" : ""
                      }`}
                    >
                      <p>
                        We can help with your financing plan, we can offer some
                        tips and tricks. Drive off with this dream car of yours
                        regardless of your credit history.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <div className="col-lg-8 col-md-8 col-12">
              <div className="main-content">
                <div className="top-content-right">
                  <h6 className="title">Cars List</h6>

                  <div className="count-product">
                    <div className="count">{Context.listCar.length}</div>
                    <span>Availabel</span>
                  </div>
                </div>
                {Context.loading ? (
                  <Loading />
                ) : (
                  <div className="content-wraper">
                    <PaginatedItems />
                  </div>
                )}
              </div>
              <div className="car-question sup-car-question">
                <h4 className="title">Prequently Asked Questions</h4>
                <div className="question-list">
                  <div
                    className={`questtion-list__title ${
                      checkInQuestion(questionList, 5) ? "active" : ""
                    }`}
                  >
                    <p>
                      <i className="fas fa-circle dot-red"></i>
                      What can I expect from Car Dealer?
                    </p>
                    <i
                      id="5"
                      onClick={handleAddQuestion}
                      className={`fa-solid fa-plus icon-plus ${
                        checkInQuestion(questionList, 5) ? "disable" : ""
                      }`}
                    ></i>
                    <i
                      id="5"
                      onClick={()=>{handleRemoveQuestion(questionList,5)}}
                      className={`fa-solid fa-minus icon-minus
                          ${checkInQuestion(questionList, 5) ? "" : "disable"}`}
                    ></i>
                  </div>
                  <div
                    className={`question-list__content ${
                      checkInQuestion(questionList, 5) ? "active" : ""
                    }`}
                  >
                    <p>
                      We can help with your financing plan, we can offer some
                      tips and tricks. Drive off with this dream car of yours
                      regardless of your credit history.
                    </p>
                  </div>
                </div>
                <div className="question-list">
                  <div
                    className={`questtion-list__title ${
                      checkInQuestion(questionList, 6) ? "active" : ""
                    }`}
                  >
                    <p>
                      <i className="fas fa-circle dot-red"></i>
                      How far in advand do I need to place my oder?
                    </p>
                    <i
                      id="6"
                      onClick={handleAddQuestion}
                      className={`fa-solid fa-plus icon-plus ${
                        checkInQuestion(questionList, 6) ? "disable" : ""
                      }`}
                    ></i>
                    <i
                      id="6"
                      onClick={()=>{handleRemoveQuestion(questionList,6)}}
                      className={`fa-solid fa-minus icon-minus ${
                        checkInQuestion(questionList, 6) ? "" : "disable"
                      }`}
                    ></i>
                  </div>
                  <div
                    className={`question-list__content ${
                      checkInQuestion(questionList, 6) ? "active" : ""
                    }`}
                  >
                    <p>
                      We can help with your financing plan, we can offer some
                      tips and tricks. Drive off with this dream car of yours
                      regardless of your credit history.
                    </p>
                  </div>
                </div>
                <div className="question-list">
                  <div
                    className={`questtion-list__title ${
                      checkInQuestion(questionList, 7) ? "active" : ""
                    }`}
                  >
                    <p>
                      <i className="fas fa-circle dot-red"></i>
                      Is the car buying process complicated?
                    </p>
                    <i
                      id="7"
                      onClick={handleAddQuestion}
                      className={`fa-solid fa-plus icon-plus ${
                        checkInQuestion(questionList, 7) ? "disable" : ""
                      }`}
                    ></i>
                    <i
                      id="7"
                      onClick={()=>{handleRemoveQuestion(questionList,7)}}
                      className={`fa-solid fa-minus icon-minus ${
                        checkInQuestion(questionList, 7) ? "" : "disable"
                      }`}
                    ></i>
                  </div>
                  <div
                    className={`question-list__content ${
                      checkInQuestion(questionList, 7) ? "active" : ""
                    }`}
                  >
                    <p>
                      We can help with your financing plan, we can offer some
                      tips and tricks. Drive off with this dream car of yours
                      regardless of your credit history.
                    </p>
                  </div>
                </div>
                <div className="question-list">
                  <div
                    className={`questtion-list__title ${
                      checkInQuestion(questionList, 8) ? "active" : ""
                    }`}
                  >
                    <p>
                      <i className="fas fa-circle dot-red"></i>
                      What if I make a deposit and don't want to buy anymore?
                    </p>
                    <i
                      id="8"
                      onClick={handleAddQuestion}
                      className={`fa-solid fa-plus icon-plus ${
                        checkInQuestion(questionList, 8) ? "disable" : ""
                      }`}
                    ></i>
                    <i
                      id="8"
                      onClick={()=>{handleRemoveQuestion(questionList,8)}}
                      className={`fa-solid fa-minus icon-minus ${
                        checkInQuestion(questionList, 8) ? "" : "disable"
                      }`}
                    ></i>
                  </div>
                  <div
                    className={`question-list__content ${
                      checkInQuestion(questionList, 8) ? "active" : ""
                    }`}
                  >
                    <p>
                      We can help with your financing plan, we can offer some
                      tips and tricks. Drive off with this dream car of yours
                      regardless of your credit history.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
