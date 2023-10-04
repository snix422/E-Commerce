import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const useSearchParams = () => {

    const { data } = useFetch();
    const dataFromHook = data.length ? Object.values(data[0]) : [];

    const navigate = useNavigate();

    const searchProduct2 = (term) => {
        if (term.length === 0) {
            navigate('/')
        } else {
            const item = dataFromHook.filter(product => product.name.toLowerCase().includes(term.toLowerCase()));
            localStorage.removeItem('searchItem');
            localStorage.removeItem('phrase');
            localStorage.setItem('searchItem', JSON.stringify(item));
            localStorage.setItem('phrase', JSON.stringify(term));
            navigate('/search');
        }
    }


    return { searchProduct2 }

}

export default useSearchParams