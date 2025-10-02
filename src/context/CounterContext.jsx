import { createContext,useContext,useState } from "react";

//1 Criamos um contexto vazio
//Esse contexto será utilizado em para compartilhar
//dados de forma global.
const CounterContext = createContext()

//2. Criamos um Provider( quem fornece os dados do contexto)
export function CounterProvider({children}){
    //Estado global do contator
    const[count,setCount]=useState(0)

    //Função para incrementar
    function increment(){
        setCount(prev=>prev+1)
    }
    //Função para decrementar
    function decrement(){
        setCount(prev=>prev-1)
    }
    //Retorna o Provider do Context
    return(
        <CounterContext.Provider value={{count,increment,decrement}}>
            {children}
        </CounterContext.Provider>
    )
}

//3. Criamos um hook personalizado para consumir o contexto
//Assim podemos user "useCounter()" em vez de userContext
export function useCounter(){
    return useContext(CounterContext)
}