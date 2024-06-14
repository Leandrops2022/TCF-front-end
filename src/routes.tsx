import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import { GlobalStyles } from "./components/GlobalStyle/GlobalStyle";

const MyRouter = (): React.JSX.Element => {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default MyRouter;