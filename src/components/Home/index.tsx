import HighLightsComponent from "../HightLightsComponent";
import { MidContentDiv, StyledLink, StyledMainDiv } from "./styles";

import SectionCard from "./components/SectionCard";
import useFetchUrl from "../../Hooks/useFetchUrl";
import NowPlaying from "../NowPlaying";

const Home = () => {
    const { data } = useFetchUrl('home');

    let highlights: any = [];

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
            <h2 className={"text-center pt-4 pb-4"}>Em cartaz (Cinemas e streaming)</h2>
            <NowPlaying />


        </StyledMainDiv>
    );
}

export default Home;