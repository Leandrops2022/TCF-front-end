import { Container } from "./styles";
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

       
        {/* <MainContentDiv backgroundUrl={ }>
            Here will the the movie info

        </MainContentDiv> */}
    </Container>
}

export default MovieDetails;