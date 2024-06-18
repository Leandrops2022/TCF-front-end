import { ReactNode, useState } from "react"
import { MyContext } from "./MyContext";

interface MyContextProviderProps {
    children: ReactNode;
}

const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
    const [showingMenu, setShowingMenu] = useState<boolean>(false);

    const showMenu = () => {
        setShowingMenu(true)
        console.log(showingMenu);
    }

    const hideMenu = () => {
        setShowingMenu(false)
        console.log(showingMenu);

    }

    return (
        <MyContext.Provider value={{ showingMenu, showMenu, hideMenu }}>
            {children}
        </MyContext.Provider>
    );
}

export default MyContextProvider;