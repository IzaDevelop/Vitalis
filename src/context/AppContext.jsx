import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";
const AppContext = createContext({})

export function AppContextProvider({ children }) {
    // THEME

    const [theme, setTheme] = useState(() => localStorage.theme === "dark");

    function handleToggleTheme() {
        setTheme(!theme)
    }

    useEffect(() => {
        const rootElement = window.document.documentElement
        const currentTheme = theme

        const prevTheme = currentTheme ? "light" : "dark"
        rootElement.classList.remove(prevTheme)

        const nextTheme = currentTheme ? "dark" : "light"
        rootElement.classList.add(nextTheme)

        localStorage.setItem("theme", nextTheme)
    }, [theme])

    //  WINDOS DIMENSION

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    }

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // MODAL

    const [modal, setModal] = useState({
        state: false,
        title: "",
        message: "",
        children: null,
        buttons: [
            {
                text: "",
                function: undefined,
                reload: false,
                redirect: "",
                custom: false
            }
        ]
    });

    const [loadingScreen, setLoadingScreen] = useState(false);

    return (
        <AppContext.Provider value={{
            theme,
            handleToggleTheme,

            windowDimensions,

            modal,
            setModal,

            loadingScreen,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)