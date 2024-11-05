import { useLocation, useNavigate, useParams } from "react-router-dom";
import { SearchResultInterface } from "../../Interfaces/SearchResultInterface";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../MyContext";
import axios from "axios";
import ResultsList from "./components/ResultsList";

const Searchresults = () => {
    const [paginationData, setPaginationData] = useState({
        current_page: 1,
        last_page: 1,
        total: 0,
    });

    const [data, setData] = useState<SearchResultInterface[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const { defaultOfficialUrl } = useContext(MyContext);

    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const getCurrentPageFromUrl = () => {
        const queryParams = new URLSearchParams(location.search);
        return parseInt(queryParams.get("page") || "1", 10);
    };

    const fetchData = async (page: number) => {
        try {
            const url = `${defaultOfficialUrl}/api/busca/${params.slug}?page=${page}`;

            const response = await axios.get(url);
            setData(response.data.data);
            setPaginationData(response.data.pagination);
            setLoading(false);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        const initialPage = getCurrentPageFromUrl();
        setLoading(true);

        fetchData(initialPage);


    }, [params.slug]);


    const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
        scrollTo(0, 0);
        setLoading(true);
        setPaginationData((prev) => ({ ...prev, current_page: value }));

        navigate(`?page=${value}`);
        fetchData(value);

    };


    return <ResultsList data={data} loading={loading} paginationData={paginationData} onPageChange={handlePageChange} />


}

export default Searchresults;