import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";

const useFilteredProducts = () => {


    const [filteredBooks, setFilteredBooks] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState([]);

    /*const { data } = useFetch();
    const dataFromHook = data.length ? Object.values(data[0]) : [];*/


    const [status, setStatus] = useState({
        Promocje: false,
        Polecane: false,
        Bestsellers: false,
    })

    const [producent, setProducent] = useState({
        Stealseries: false,
        HyperX: false,
        Razer: false
    })

    const filteringProducts = (priceMin, priceMax, prodStatus, status, products) => {
        console.log(prodStatus);
        console.log(status);
        console.log(products);
        setStatus(status);
        setProducent(prodStatus);

        const companies = [
            prodStatus.Stealseries && 'Stealseries',
            prodStatus.HyperX && 'HyperX',
            prodStatus.Razer && 'Razer'
        ].filter(Boolean);

        const productStatuses = [
            status.Promocje && 'promocje',
            status.Polecane && 'polecane',
            status.Bestsellers && 'bestsellers'
        ].filter(Boolean)

        console.log(companies);
        console.log(productStatuses);

        const filtered = products.filter((product) =>
            (companies.length ? companies.includes(product.company) : true) &&
            (productStatuses.length ? productStatuses.some((status) => product[status]) : true) &&
            (priceMin ? product.price > priceMin : true) &&
            (priceMax ? product.price < priceMax : true))
        setFilteredBooks(filtered);
        console.log(filtered);
    }

    console.log(filteredBooks);
    return { filteredBooks, filteringProducts }

}

export default useFilteredProducts