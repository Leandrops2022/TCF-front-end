import { Container, CoverDiv, MainContentDiv, StyledCover } from "./styles";
import useFetchUrl from "../../Hooks/useFetchUrl";

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
        <MainContentDiv />
     
    </Container>
}

export default MovieDetails;