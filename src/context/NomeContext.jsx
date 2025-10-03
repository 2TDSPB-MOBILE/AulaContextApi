import { createContext,useContext,useState } from "react";

//1 Criamos um contexto vazio
//Esse contexto será utilizado em para compartilhar dados de forma global.
const NomeContext = createContext()

//2. Criamos um Provider( quem fornece os dados do contexto)
export function NomeProvider({children}){
    const[meuNome,setMeuNome]=useState("Prof. Fernando")

    return(
        <NomeContext.Provider value={{meuNome}}>
            {children}
        </NomeContext.Provider>
    )
}

//3. Criamos um hook personalizado para consumir o contexto
//Assim podemos user "useCounter()" em vez de userContext
export function useMeuNome(){
    return useContext(NomeContext)
}