import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, MainContentDiv } from "./styles";
import axios from "axios";

const useQuery = () => {
    let s = new URLSearchParams(useLocation().search).get('s');
    let route = useLocation().pathname;
    return {
        's': s,
        'route': route
    }
}


const MovieInfo = () => {
    const [movieData, setMoviedata] = useState();

    const data = useQuery();
    const parametersOk = data['route'] && data['s'];

    useEffect(() => {
        if (parametersOk) {
            const movieInfoUrl = 'http://127.0.0.1:8000/api' + data['route'] + data['s'];
            console.log(movieInfoUrl);
            axios.get(movieInfoUrl)
                .then(response => {
                    if (response.status === 200) {
                        console.log(response.data);
                    }
                })
                .catch((error) => console.error('An error has ocurred: ' + error))
        }

    }, [data]);
    return <Container>

        {parametersOk ?
            (<div>Parametros ok</div>)
            :
            (<div>Não encontrado</div>)
        }
        {/* <MainContentDiv backgroundUrl={ }>
            Here will the the movie info

        </MainContentDiv> */}
    </Container>
}

export default MovieInfo;