import { useState, useEffect } from "react"
import axios from "axios";

const useFetch = () => {
    const [data, setData] = useState([]);

    const url = process.env.REACT_APP_URL_BOOKS;
    console.log(url);

    useEffect(() => {
        axios.get("https://gamingshop-4b668-default-rtdb.europe-west1.firebasedatabase.app/Products.json")
        .then(
          (res) => {
            console.log(res.data)
            setData([res.data]);
          },
          (error) => {
            console.log(error);
          }
        );
      }, [])

      return {data}
}

export default useFetch