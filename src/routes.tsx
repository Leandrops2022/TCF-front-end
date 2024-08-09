import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import { GlobalStyles } from "./components/GlobalStyle/GlobalStyle";
import Top100 from "./components/Top100";
import Header from "./components/Header";
import MyContextProvider from "./MyContextProvider";
import { ContainerDiv } from "./styles";
import Article from "./components/Article";
// import { Minilist } from "./components/Minilist";
import { PageNews } from "./components/PageNews";
import OscarWinners from "./components/OscarWinners";
import BestMoviesOfLastYear from "./components/BestMoviesOfLastYear";
import MovieInfo from "./components/MovieInfo";

const MyRouter = (): React.JSX.Element => {
    return (
        <BrowserRouter>
            <GlobalStyles />

            <MyContextProvider>

                <ContainerDiv>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Main />}>
                            <Route index element={<Home />} />
                            <Route path="/ganhadores-oscar-2024" element={<OscarWinners />} />
                            <Route path="/melhores-filmes-do-ano-passado" element={<BestMoviesOfLastYear />} />
                            <Route path="/filme" element={<MovieInfo />} />
                            <Route path="/top100" element={<Top100 />} />
                            <Route path="/artigo" element={<Article />} />
                            <Route path="/minilista" element={<Article />} />
                            <Route path="/noticia" element={<PageNews />} />
                        </Route>
                    </Routes>
                </ContainerDiv>
            </MyContextProvider>

        </BrowserRouter>
    );
}

export default MyRouter;