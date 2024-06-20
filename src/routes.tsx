import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import { GlobalStyles } from "./components/GlobalStyle/GlobalStyle";
import Top100 from "./components/Top100";
import Header from "./components/Header";
import MyContextProvider from "./MyContextProvider";
import { ContainerDiv, InnerContainerDiv } from "./styles";
import Article from "./components/Article";
import { Minilist } from "./components/Minilist";
import { PageNews } from "./components/PageNews";

const MyRouter = (): React.JSX.Element => {
    return (
        <BrowserRouter>
            <GlobalStyles />

            <MyContextProvider>

                <ContainerDiv>
                    <Header />
                    <InnerContainerDiv>
                        <Routes>
                            <Route path='/' element={<Main />}>
                                <Route index element={<Home />} />
                                <Route path="/top100" element={<Top100 />} />
                                <Route path="/artigo" element={<Article />} />
                                <Route path="/minilista" element={<Minilist />} />
                                <Route path="/noticia" element={<PageNews />} />
                            </Route>
                        </Routes>
                    </InnerContainerDiv>
                </ContainerDiv>
            </MyContextProvider>

        </BrowserRouter>
    );
}

export default MyRouter;