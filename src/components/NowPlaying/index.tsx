import { Navigation, Pagination } from "swiper/modules"
import { StyledMoviePoster, StyledMovieTitleDiv, StyledSwiper, StyledSwiperSlide } from "./styles"
import { useEffect, useState } from "react"
import axios from "axios";
import { NowPlayingInterface } from "../../Interfaces/NowPlayingInterface";

const NowPlaying = () => {
    const [nowPlayingData, setNowPlayingData] = useState<NowPlayingInterface[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/nos-cinemas");
                if (response.status == 200) {
                    setNowPlayingData(response.data);
                }

            } catch (error) {
                console.error("Error fetching data: ", error)
            }
        }

        fetchData();
    }, []);

    return <StyledSwiper
        modules={[Navigation, Pagination]}
        navigation
        pagination
        spaceBetween={10}
        breakpoints={{
            // When window width is less than 1000px
            1000: {
                slidesPerView: 1, // Show only 1 slide
            },
            // When window width is 1000px or more
            1001: {
                slidesPerView: 5, // Show 5 slides
            },
        }}
    >
        {nowPlayingData.map((movie, index) => <StyledSwiperSlide key={index}>
            <StyledMoviePoster src={movie.poster} />
            <StyledMovieTitleDiv>{movie.title}</StyledMovieTitleDiv>
        </StyledSwiperSlide>

        )}


    </StyledSwiper>
}

export default NowPlaying;