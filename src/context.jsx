import { createContext, useState, useContext, useEffect } from "react";

const GlobalContext = createContext();


export default function AppContext(props) {
    const [ isDarkTheme, setIsDarkTheme ] = useState(false);
    //setting searchWord to a string, so the page isnt empty upon loading
    const [ searchWord, setSearchWord ] = useState("love");
       
    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        const body = document.querySelector("body");
        body.classList.toggle("dark-theme", newDarkTheme);
    }
    
    return (
    <GlobalContext.Provider value={{ isDarkTheme, toggleDarkTheme, searchWord, setSearchWord }}>
        {props.children}
    </GlobalContext.Provider>
    )
}
export const useGlobalContext = () => useContext(GlobalContext)