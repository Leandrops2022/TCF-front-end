import { Link, useParams } from "react-router-dom"
import { ActorBiography, ActorImage, ActorImageDiv, ActorInfoDiv, ActorPersonalInfo, Container, MainContentDiv, StyledP, StyledSmallMovieDiv, StyledUl } from "./styles"
import { useEffect } from "react";
import useFetchUrl from "../../Hooks/useFetchUrl";


export const ActorDetails = () => {

    const { data, loading, error } = useFetchUrl(`ator`);
    console.log(data?.actorData.filmes_que_atuou);
    return <Container>
        <MainContentDiv>

            <ActorPersonalInfo>
                <ActorImageDiv>
                    <ActorImage src={data?.actorData.poster} />
                </ActorImageDiv>
                <ActorInfoDiv>
                    <h1 className={'text-center text-xxg'}>{data?.actorData.nome}</h1>
                    <p>Nascimento: {data?.actorData.nascimento}</p>
                    <p>Local de nascimento: {data?.actorData.local_nascimento}</p>
                    {data?.actorData.morte && data.actorData.morte != '01/01/0001' && <p>Morte: {data.actorData.morte}</p>}
                    <ActorBiography>
                        <h2 className={"text-center"}>Biografia</h2>
                        <p>{data?.actorData.biografia}</p>
                    </ActorBiography>
                </ActorInfoDiv>
            </ActorPersonalInfo>
            <h2 className={"text-center p-6"}>Filmes em que atuou</h2>
            <StyledUl>
                {data?.actorData.filmes_que_atuou && data.actorData.filmes_que_atuou.map((filme, index) => <li key={index}>
                    <Link to={`/filmes/${encodeURIComponent(filme.slug)}`}>
                        <StyledSmallMovieDiv>
                            <img width={"70px"} src={filme.poster_filme} />
                            <div className={"p-2 "}>
                                <StyledP className={"text-white"}>{filme.titulo_filme} ({filme.ano}) - {filme.nota}&#9733;</StyledP>
                                <span>Personagem: {filme.personagem}</span>
                            </div>
                        </StyledSmallMovieDiv>
                    </Link>
                </li>)}
            </StyledUl>

        </MainContentDiv>
    </Container>
}