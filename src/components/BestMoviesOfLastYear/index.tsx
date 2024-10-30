
import MovieCardsAndPagination from '../MovieCardsAndPagination';
import { MainContentDiv } from './styles';
import data from "./assets/2023.json";
import ContentContainer from '../ContentContainer';
import DisqusComponent from '../DisqusComponent';
import { useLocation } from 'react-router-dom';


const BestMoviesOfLastYear = () => {

    const pathlocation = useLocation();

    console.log(pathlocation);

    return (
        <MainContentDiv>

            <ContentContainer data={data} />

            <MovieCardsAndPagination />

            <DisqusComponent />
        </MainContentDiv>
    );
};

export default BestMoviesOfLastYear;
