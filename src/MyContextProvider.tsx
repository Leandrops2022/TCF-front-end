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

    const basePageUrl = "https://top100filmes.com.br/";

    return (
        <MyContext.Provider value={{ showingMenu, showMenu, hideMenu, basePageUrl }}>
            {children}
        </MyContext.Provider>
    );
}

export default MyContextProvider;