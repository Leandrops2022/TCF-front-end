import { AdditionalInfoDiv, CardDiv, CastDiv, CastSwiperSlide, Container, CoverDiv, LoadingDiv, MainContentDiv, MovieGenres, MovieInfoDiv, MovieSynopsis, MovieTitle, ProviderImage, ProvidersDiv, StyledActorImage, StyledCastLegendDiv, StyledCastSwiper, StyledCover, StyledIFrame, StyledLink, StyledSwiper, WhereToWatchDiv } from "./styles";
import useFetchUrl from "../../Hooks/useFetchUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";

import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import LoadingIndicator from "../LoadingIndicator";

const MovieDetails = () => {

    const { data, loading, error } = useFetchUrl('filme');

    window.scrollTo(0, 0);

    if (loading) {

        return <LoadingDiv>
            <LoadingIndicator />
        </LoadingDiv>;
    }

    if (error) {
        return <div>{error}</div>;
    }


    return <Container>
        <CardDiv>
            <CoverDiv>
                <StyledCover src={data?.movieData.poster} />
            </CoverDiv>

            <MainContentDiv >
                <MovieInfoDiv>
                    <MovieTitle>
                        {data?.movieData.titulo_portugues} - {data?.movieData.ano_lancamento} - {data?.movieData.nota} <FontAwesomeIcon color="gay" size="xs" icon={faStar} />
                    </MovieTitle>
                    <MovieGenres> {data?.movieData.genero_1} - {data?.movieData.genero_2} - {data?.movieData.genero_3} </MovieGenres>
                    <MovieSynopsis>
                        {data?.movieData.resumo_portugues}
                    </MovieSynopsis>

                </MovieInfoDiv>
                <AdditionalInfoDiv>
                    <CastDiv>

                        <StyledCastSwiper
                            modules={[Navigation, Pagination]}
                            navigation

                            pagination
                            spaceBetween={10}
                            slidesPerView={2}
                        >
                            {data?.movieData.atores.map((actor, index) => {
                                return <CastSwiperSlide key={index}>
                                    <StyledLink to={"/ator/" + actor.slug}>

                                        <StyledActorImage src={actor.poster} />
                                        <StyledCastLegendDiv>
                                            <p className="text-base text-white">{actor.nome}</p>
                                            <p className="text-xs text-white">{actor.personagem}</p>
                                        </StyledCastLegendDiv>

                                    </StyledLink>


                                </CastSwiperSlide>
                            })}

                        </StyledCastSwiper>
                    </CastDiv>
                    <WhereToWatchDiv>
                        <p>Onde Assistir: </p>
                        <ProvidersDiv>
                            {data?.movieData.onde_assistir && data?.movieData.onde_assistir.map((provider) => {
                                return <ProviderImage width="70px" src={provider.logo_path} key={provider.provider_name}></ProviderImage>
                            })

                            }
                        </ProvidersDiv>
                    </WhereToWatchDiv>
                </AdditionalInfoDiv>
            </MainContentDiv>
        </CardDiv>

        {data?.movieData.videos && data?.movieData.videos.length > 0 && <CardDiv>
            <StyledSwiper
                modules={[Navigation, Pagination]}
                navigation
                pagination
                spaceBetween={20}
                breakpoints={{
                    1000: {
                        slidesPerView: 1,
                    },
                    1001: {
                        slidesPerView: 3,
                    },
                }}
            >
                {data?.movieData.videos.map((video, index) => {
                    return <SwiperSlide key={index}>
                        <StyledIFrame
                            width="560"
                            height="315"
                            data-content-frame
                            src={video}
                            title="{{ $video->name }}"
                            allow="web-share"
                            allowFullScreen
                            loading="lazy">

                        </StyledIFrame>


                    </SwiperSlide>
                })}

            </StyledSwiper>
        </CardDiv>
        }



    </Container>
}

export default MovieDetails;