import { createContext } from "react";

export const MyContext = createContext({
    showingMenu: false,
    showMenu: () => { },
    hideMenu: () => { }
});