import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import ReactPaginate from "react-paginate";
import { MyContext } from "../../Context/MyContext";
import { config } from "../../utils";
import ProductOfProductsPage from "../Product/ProductOfProductsPage";

export function PaginatedItems(props) {
  const Context = useContext(MyContext)
  const [item, setItem] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        `${config.API_URL}/listcar?page=1&limit=${Context.limit}`
      );
      setItem(data.data);
    };
    getData();
  }, []);

  const changeDataPage = async (currentPage) => {
    const data = await axios.get(
      `${config.API_URL}/listcar?page=${currentPage}&limit=${Context.limit}`
    );
    return data;
  };
  const handlePageClick = async (e) => {
    let currentPage = e.selected + 1;
    const data = await changeDataPage(currentPage);
    setItem(null);
    setItem(data.data);
    return;
  };
  return (
    <>
      {item.map((element) => {
        return <ProductOfProductsPage key={element.id} element={element} />;
      })}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >>"
        onPageChange={handlePageClick}
        pageCount={Context.pageCount}
        previousLabel="<< previous"
        renderOnZeroPageCount={null}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        containerClassName={"pagination-list"}
        pageClassName={"pagination-item"}
        pageLinkClassName={"pagination-link"}
        previousClassName={"item-wide-first"}
        nextClassName={"item-wide-last"}
        previousLinkClassName={"link-wide-first"}
        nextLinkClassName={"link-wide-last"}
        breakClassName={"pagination-item"}
        breakLinkClassName={"pagination-link"}
        activeClassName={"is-active"}
      />
    </>
  );
}
