import { createContext,useContext,useState } from "react";

//1. Criando o contexto vazio....
const ThemeContext = createContext()

export const ThemeProvider = ({children})=>{
    const[theme,setTheme] = useState("light")

    //Função para alternar entre os temas...
    const toggleTheme = () =>{
        setTheme((prev)=>(prev==="light"?"dark":"light"))
    }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = ()=>{
    return useContext(ThemeContext)
}

