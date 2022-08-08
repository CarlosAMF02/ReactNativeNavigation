import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function HomeScreen(props) {
  return (
    <SafeAreaView>
      <View style={ estilos.page }>
        <Text>Tela inicial! Seja bem-vindo!</Text>
        <TouchableOpacity
          onPress={() => { props.navigation.navigate('Sobre', {
            ano : 2022,
            sala : '2TDSA'
          }) }}>
          <Text>Veja sobre...</Text>
        </TouchableOpacity>      
      </View>
    </SafeAreaView>
  )
}

function SobreScreen(props) {

  const {ano, sala} = props.route.params
  return (
    <SafeAreaView>
      <View style={ estilos.page }>
        <Text>
          Sobre - Desenvolvido por 
          { sala } - { ano }
        </Text>
      </View>
    </SafeAreaView>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title : 'Área inicial'
          }} />
        <Stack.Screen name="Sobre" component={SobreScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const estilos = StyleSheet.create({
  page : {
    padding : 16
  }
})








