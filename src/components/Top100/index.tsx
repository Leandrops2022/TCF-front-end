import { useParams } from "react-router-dom";
import { StyledTop100Div } from "./styles";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import MovieCardsAndPagination from "../MovieCardsAndPagination";
import { Top100IntroInterface } from "../../Interfaces/Top100IntroInterface";
import DisqusComponent from "../DisqusComponent";
import { MyContext } from "../../MyContext";

const Top100 = () => {
    const [top100Intro, setTop100Intro] = useState<Top100IntroInterface>();
    const params = useParams();

    const { defaultOfficialUrl } = useContext(MyContext);

    let top100Name = params.slug;

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${defaultOfficialUrl}/api/top100s/${top100Name}/texts`);
            if (response.status == 200) {
                setTop100Intro(response.data[0]);

            }
        }
        fetchData();
    }, [top100Name]);

    return (<StyledTop100Div>
        {top100Intro && <div>
            <img className={'m-auto'} src={`${defaultOfficialUrl}/${top100Intro.imagem_capa}`} alt={top100Intro.alt_capa} />
            <h1 className={'mt-10 mb-10'}>{top100Intro.h1}</h1>
            <h2>{top100Intro.h2}</h2>
            <div className={'text-left mb-10 p-2'} dangerouslySetInnerHTML={{ __html: top100Intro.p }} />
        </div>
        }
        <MovieCardsAndPagination path={"top100s"} />

        <DisqusComponent />
    </StyledTop100Div>);
}

export default Top100;

