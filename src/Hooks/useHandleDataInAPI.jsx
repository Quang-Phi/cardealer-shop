import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { config } from "../utils";

export default function (limit) {
  const [loading, setLoading] = useState(false);
  const [listCar, setListCar] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const handleDataAPI = async () => {
    try {
      setLoading(true);
      const dataValue = await axios.get(`${config.API_URL}/listcar`);

      setListCar(dataValue.data);
      setPageCount(Math.ceil(dataValue.data.length / limit));
      setLoading(false);
    } catch (e) {}
  };

  useEffect(() => {
    handleDataAPI();
  }, [config.API_URL]);

  return [listCar, loading, pageCount];
}
