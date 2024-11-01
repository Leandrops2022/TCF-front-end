import { ReactNode, useState } from "react"
import { MyContext } from "./MyContext";

interface MyContextProviderProps {
    children: ReactNode;
}

const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
    const [showingMenu, setShowingMenu] = useState<boolean>(false);

    const showMenu = () => {
        setShowingMenu(true)
    }

    const hideMenu = () => {
        setShowingMenu(false)

    }

    const defaultUrl = "http://localhost:8000/api";
    const defaultOfficialUrl = "https://www.tcfofficial.com";

    return (
        <MyContext.Provider value={{ showingMenu, showMenu, hideMenu, defaultUrl, defaultOfficialUrl }}>
            {children}
        </MyContext.Provider>
    );
}

export default MyContextProvider;