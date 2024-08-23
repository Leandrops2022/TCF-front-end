
import MovieCardsAndPagination from '../MovieCardsAndPagination';
import {  MainContentDiv } from './styles';
import data from "./assets/2023.json";
import ContentContainer from '../ContentContainer';


const BestMoviesOfLastYear = () => {
   
    return (
        <MainContentDiv>
            
            <ContentContainer data={data}/>

            <MovieCardsAndPagination />
        
            <div id="disqus_thread"></div>
            <noscript>
                Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
            </noscript>
        </MainContentDiv>
    );
};

export default BestMoviesOfLastYear;
