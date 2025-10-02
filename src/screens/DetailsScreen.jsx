import {View,Text,Button,StyleSheet} from 'react-native'
//Importando o contexto que criamos
import {useCounter} from '../context/CounterContext'

export default function DetailsScreen({navigation}){
    //Pegando o contador global
    const{count}=useCounter()
    return(
        <View style={{flex:1,
            justifyContent:'center',
            alignItems:'center'
        }}>
            <Text>Valor atual do contador:{count}</Text>
            <Button 
                title='Voltar p/ Home'
                onPress={()=>navigation.navigate("Home")}
            />
        </View>
    )
}