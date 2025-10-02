import HomeScreen from './src/screens/HomeScreen'
import { CounterProvider } from './src/context/CounterContext'

export default function App(){
  return(
    <CounterProvider>
      <HomeScreen/>
    </CounterProvider>
  )
}