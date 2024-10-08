import { useParams } from "react-router-dom";
import { StyledTop100Div } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieCardsAndPagination from "../MovieCardsAndPagination";
import ContentContainer from "../ContentContainer";
import { Top100IntroInterface } from "../../Interfaces/Top100IntroInterface";

const Top100 = () => {
    const [top100Intro, setTop100Intro] = useState<Top100IntroInterface>();
    const params = useParams();
    let top100Name = params.slug;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://127.0.0.1:8000/api/top100/" + top100Name + "/texts");
            if (response.status == 200) {
                setTop100Intro(response.data[0]);

            }
        }
        fetchData();
    }, [top100Name]);

    return (<StyledTop100Div>
        {top100Intro && <div>
            <img className={'m-auto'} src={"https://top100filmes.com.br/" + top100Intro.imagem_capa} alt={top100Intro.alt_capa} />
            <h1 className={'mt-10 mb-10'}>{top100Intro.h1}</h1>
            <h2>{top100Intro.h2}</h2>
            <div className={'text-left mb-10 p-2'} dangerouslySetInnerHTML={{ __html: top100Intro.p }} />
        </div>
        }
        <MovieCardsAndPagination path={"top100"} />
    </StyledTop100Div>);
}

export default Top100;

