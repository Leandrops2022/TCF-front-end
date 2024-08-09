import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useQuery = () => {
    let s = new URLSearchParams(useLocation().search).get('s');
    let route = useLocation().pathname;
    return {
        's': s,
        'route': route
    }
}

const MovieInfo = () => {
    const data = useQuery();
    useEffect(() => {

        console.log(data);
    }, [data]);
    return <div>
        Here will the the movie info
    </div>
}

export default MovieInfo;