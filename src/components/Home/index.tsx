import HighLightsComponent from "../HightLightsComponent";

const Home = () => {

    return (
        <HighLightsComponent urlToFetch={'http://localhost:8000/api/page/destaques'} cardsQuantity={8} gridConfig={{ columns: 4, rows: 2 }} />
    );
}

export default Home;