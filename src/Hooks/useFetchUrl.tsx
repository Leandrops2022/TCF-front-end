import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { MyContext } from "../MyContext";
import { useParams } from "react-router-dom";
import DataInterface from "../Interfaces/DataInterface";

const useFetchUrl = (path: string) => {
    const [data, setData] = useState<DataInterface | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const { defaultUrl } = useContext(MyContext);

    const { slug } = useParams();


    const urlToFetch = slug ? `${defaultUrl}/${path}/${slug}` : `${defaultUrl}/${path}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(urlToFetch);
                setData(response.data);
            } catch (error) {
                console.log(error)
                setError('There was an error fetching the data, please try again');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [urlToFetch]);

    return { data, loading, error };
};

export default useFetchUrl;
