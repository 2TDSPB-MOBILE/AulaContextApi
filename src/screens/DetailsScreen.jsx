import { View, Text, Button, StyleSheet } from 'react-native'
//Importando o contexto que criamos
import { useCounter } from '../context/CounterContext'
import { useTheme } from '../context/ThemeContext'

export default function DetailsScreen({ navigation }) {
    //Pegando o contador global
    const { count } = useCounter()

    //Pegando o estado theme
    const { theme } = useTheme()

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:theme==='light'?'#fff':'#333'
        }
    })
    return (
        <View style={styles.container}>
            <Text>Valor atual do contador:{count}</Text>
            <Button
                title='Voltar p/ Home'
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}

