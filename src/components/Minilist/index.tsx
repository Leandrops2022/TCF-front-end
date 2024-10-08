import useFetchUrl from "../../Hooks/useFetchUrl";
import LoadingIndicator from "../LoadingIndicator";
import { MainContainer } from "./styles";
import MovieCardsAndPagination from "../MovieCardsAndPagination";
import ContentContainer from "../ContentContainer";
import HighLightsComponent from "../HightLightsComponent";

export const Minilist: React.FC = () => {
    const { data, loading } = useFetchUrl('minilistas');

    if (loading) {
        return <LoadingIndicator />
    }

    const contentData = data?.content || {};

    return (
        <MainContainer>
            <ContentContainer data={contentData} />

            <MovieCardsAndPagination path={"minilista"} content={data?.movies} />

            <h2 className={'mt-20 mb-20 text-center'}>Veja Também:</h2>

            <HighLightsComponent
                highlights={data?.highlights || []}
                cardsQuantity={4}
                gridConfig={{
                    columns: 4,
                    rows: 1
                }}
            />

        </MainContainer>
    );
}