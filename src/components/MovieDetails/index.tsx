import { Container, CoverDiv, MainContentDiv, MovieGenres, MovieSynopsis, MovieTitle, StyledCover } from "./styles";
import useFetchUrl from "../../Hooks/useFetchUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";

const MovieDetails = () => {


    const {data, loading, error} = useFetchUrl('filme');

    console.log(data);
    if (loading) {
        return <div>Loading...</div>; 
    }

    if (error) {
        return <div>{error}</div>; 
    }

    return <Container>
        <CoverDiv>
            <StyledCover src={data?.poster}/>
        </CoverDiv>

        <MainContentDiv >
            <MovieTitle>
                {data?.titulo_portugues} - {data?.ano_lancamento} - {data?.nota} <FontAwesomeIcon color="gay" size="xs" icon={faStar}/>
            </MovieTitle>
            <MovieGenres> {data?.genero} </MovieGenres>
            <MovieSynopsis>
                {data?.resumo_portugues}
            </MovieSynopsis>
        </MainContentDiv>
     
    </Container>
}

export default MovieDetails;