import { Outlet } from "react-router-dom"
import Header from "../Header";

const Main = (): JSX.Element => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Main;