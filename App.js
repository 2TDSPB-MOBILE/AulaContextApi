import { CounterProvider } from './src/context/CounterContext'
import AppNavigation from './src/navigation/AppNavigation'
import { NomeProvider } from './src/context/NomeContext'
import { ThemeProvider } from './src/context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <NomeProvider>
        <CounterProvider>
          <AppNavigation />
        </CounterProvider>
      </NomeProvider>
    </ThemeProvider>




  )
}