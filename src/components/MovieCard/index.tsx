import { MoviePoster, TextContainer, MovieItem, RankingAndRating, Styledlink, TitleReleaseDuration, StyledH2, StyledH3, StyledH5 } from './styles';
import { CompactMovieDataInterface } from '../../Interfaces/CompactMovieDataInterface';

const MovieCard = ({ movie }: { movie: CompactMovieDataInterface }) => {

    const posterUrl = movie.poster.replace('original', 'w154');
    return (

        <Styledlink to={`/filmes/${encodeURIComponent(movie.slug)}`}>
            <MovieItem>


                <div>
                    <MoviePoster
                        src={posterUrl}
                        alt={`Poster of ${movie.titulo_portugues}`}
                        loading="lazy"
                    />
                </div>
                <TextContainer>
                    <RankingAndRating>
                        <StyledH2>{movie.rank ? movie.rank + ' - ' : ""}{movie.nota} <span >&#9733;</span></StyledH2>
                    </RankingAndRating>
                    <TitleReleaseDuration>
                        <StyledH3>{movie.titulo_portugues}<br />({movie.ano_lancamento} - {movie.duracao}min)</StyledH3>
                        {movie.tagline && <StyledH5>{movie.tagline}</StyledH5>}
                    </TitleReleaseDuration>

                </TextContainer>


            </MovieItem>
        </Styledlink>


    );
};

export default MovieCard;
