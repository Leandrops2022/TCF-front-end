import { useContext, useEffect, useRef, useState } from "react";
import { CardsHoldingContainer, PaginationDiv } from "./styles";
import { CompactMovieDataInterface } from "../../Interfaces/CompactMovieDataInterface";
import { PaginationDataInterface } from "../../Interfaces/PaginationDataInterface";
import axios from "axios";
import SkeletonMovieCard from "../BestMoviesOfLastYear/components/SkeletonMovieCard";
import MovieCard from "../MovieCard";
import Pagination from "../Pagination";
import { MyContext } from "../../MyContext";
import { useParams } from "react-router-dom";


const MovieCardsAndPagination: React.FC<MovieCardsAndPaginationInterface> = ({ path, content }) => {
    const [movieList, setMovielist] = useState<CompactMovieDataInterface[]>([]);
    const [paginationData, setPaginationData] = useState<PaginationDataInterface | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isLoading, setIsloading] = useState<boolean>(true);

    const { defaultUrl } = useContext(MyContext);
    const { slug } = useParams();
    const skeletonArray = Array.from({ length: 10 });
    const cardsContainerRef = useRef<HTMLDivElement>(null);

    const fetchMovies = (page: number) => {
        const url = path ? `${defaultUrl}/${path}/${slug}?page=${page}` : `${defaultUrl}/${slug}?page=${page}`;

        axios.get(url)
            .then(response => {
                if (response.status === 200) {
                    const { data, ...pagination } = response.data;
                    setMovielist(data);
                    setPaginationData(pagination);
                    setCurrentPage(page);
                    setIsloading(false);

                } else {
                    console.log('Something went wrong');
                }
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    };

    useEffect(() => {
        if (!content) {
            fetchMovies(currentPage);
        } else {
            setMovielist(content);
            setIsloading(false);
        }
    }, [content, currentPage]);

    return <>
        <CardsHoldingContainer ref={cardsContainerRef}>
            {isLoading && skeletonArray.map((_element, index) => (
                <SkeletonMovieCard key={index} />
            ))}
            {!isLoading && movieList && movieList.map((movie, index) => (
                <MovieCard movie={movie} key={index} />
            ))}
        </CardsHoldingContainer>

        {paginationData && !content && (
            <PaginationDiv>
                <Pagination
                    currentPage={paginationData.current_page}
                    lastPage={paginationData.last_page}
                    onPageChange={(page) => {
                        setIsloading(true);
                        if (cardsContainerRef.current) {
                            cardsContainerRef.current.scrollIntoView({ behavior: 'instant' });

                        }
                        fetchMovies(page)
                    }}
                />
            </PaginationDiv>
        )}
    </>
}

export default MovieCardsAndPagination;