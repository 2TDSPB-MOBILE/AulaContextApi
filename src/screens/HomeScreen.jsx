import {View,Text,Button} from 'react-native'
import { useCounter } from '../context/CounterContext'

export default function HomeScreen(){
    //Pegar os dados e as funções do nosso contexto
    const{count,increment,decrement} = useCounter()

    return(
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center'}}
        >
            <Text>Contador:{count}</Text>
            <Button title='Incrementar' onPress={increment}/>
            <Button title='Decrementar' onPress={decrement}/>
        </View>
    )
}