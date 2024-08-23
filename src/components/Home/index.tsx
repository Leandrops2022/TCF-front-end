// import { useContext } from "react";
import { useEffect, useState } from "react";
import HighLightsComponent from "../HightLightsComponent";
import { MidContentDiv, StyledLink, StyledMainDiv } from "./styles";
import HilightInterface from "../../Interfaces/HighlightInterface";
import axios from "axios";

// import { MyContext } from "../../MyContext";
import SectionCard from "./components/SectionCard";
import useFetchUrl from "../../Hooks/useFetchUrl";

const Home = () => {

    // const urlToFetch = 'http://127.0.0.1:8000/api/home';
    // const { basePageUrl } = useContext(MyContext);

    // const fetchData = async (attempt = 1) => {
    //     try {
    //         const response = await axios.get(urlToFetch);
    //         if (response.status === 200) {
    //             setHighlights(response.data.highlights);
    //         } else {
    //             console.error('Failed to fetch highlights:', response.statusText);
    //             retryFetch(attempt);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching highlights:', error);
    //         retryFetch(attempt);
    //     }
    // };

    // const retryFetch = (attempt: number) => {
    //     if (attempt < 3) {
    //         console.log(`Retrying fetch in ${attempt * 4} seconds...`);
    //         setTimeout(() => fetchData(attempt + 1), attempt * 2000); // Retry after delay
    //     } else {
    //         console.error('Max retries reached. Failed to fetch highlights.');
    //     }
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    const {data} = useFetchUrl('home');
    let highlights = [];
    if (data && data.highlights) {
        highlights = data.highlights;
    } else {
        console.log("Data or highlights is not available yet.");
    }
    
    return (
        <StyledMainDiv>
            <HighLightsComponent
                highlights={highlights}
                cardsQuantity={8}
                gridConfig={{ columns: 4, rows: 2 }}
            />
            <MidContentDiv>
                <StyledLink to={'/ganhadores-oscar-2024'}>
                    <SectionCard
                        imgUrl={'https://top100filmes.com.br/assets/indicados-oscar-2024/oscars.webp'}
                        imgAlt={"vários oscars enfileirados em um pedestal"}
                        legend={"Veja quais foram os ganhadores do Oscar 2024!!!"}
                    />
                </StyledLink>

                <StyledLink to={'/melhores-filmes-do-ano-passado'}>
                    <SectionCard
                        imgUrl={'https://top100filmes.com.br/assets/melhores-do-ano/capaMelhores2023-2.webp'}
                        imgAlt={"Foto com um troféu e vários elementos de festa ao redo"}
                        legend={"Confira nossa lista de Melhores filmes de 2023!!!"}
                    />
                </StyledLink>

            </MidContentDiv>


        </StyledMainDiv>
    );
}

export default Home;