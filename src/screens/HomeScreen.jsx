import { View, Text, Button, StyleSheet } from 'react-native'
import { useCounter } from '../context/CounterContext'
import { useMeuNome } from "../context/NomeContext"
import { useTheme } from "../context/ThemeContext"

export default function HomeScreen({ navigation }) {
    //Pegar os dados e as funções do nosso contexto
    const { count, increment, decrement } = useCounter()

    //Pegando o estado meuNome "Prof. Fernando"
    const { meuNome } = useMeuNome()

    //Pegando o estado do theme, e a função toggleTheme
    const { theme, toggleTheme } = useTheme()


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme === "light" ? "#fff" : "#333"
        },
        texto: {
            fontSize: 20,
            color: theme === "light" ? "#333" : "#fff"
        }
    })
    return (
        <View style={styles.container}
        >
            <Text>Meu nome que está no Contexto:{meuNome}</Text>
            
            <Text style={styles.texto}>Contador:{count}</Text>
            <Button title='Incrementar' onPress={increment} />
            <Button title='Decrementar' onPress={decrement} />
            <Button title='Ir para Tela Detalhes' onPress={() => navigation.navigate("Details")} />
            <Button title='Alternar temas' onPress={toggleTheme} />
        </View>
    )
}
