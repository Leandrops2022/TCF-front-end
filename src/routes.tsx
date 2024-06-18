import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import { GlobalStyles } from "./components/GlobalStyle/GlobalStyle";
import Top100 from "./components/Top100";
import Header from "./components/Header";
import MyContextProvider from "./MyContextProvider";
import { DivFilha, DivPai } from "./styles";

const MyRouter = (): React.JSX.Element => {
    return (
        <BrowserRouter>
            <GlobalStyles />

            <MyContextProvider>

                <DivPai>
                    <Header />
                    <DivFilha>
                        <Routes>
                            <Route path='/' element={<Main />}>
                                <Route index element={<Home />} />
                                <Route path="/top100" element={<Top100 />} />
                            </Route>
                        </Routes>
                    </DivFilha>
                </DivPai>
            </MyContextProvider>

        </BrowserRouter>
    );
}

export default MyRouter;