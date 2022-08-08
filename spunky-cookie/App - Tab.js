import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

function HomeScreen(props) {
  return (
    <SafeAreaView>
      <View style={ estilos.page }>
        <Text>Tela inicial! Seja bem-vindo!</Text>
        <TouchableOpacity
          onPress={() => { props.navigation.navigate('Sobre') }}>
          <Text>Veja sobre...</Text>
        </TouchableOpacity>      
      </View>
    </SafeAreaView>
  )
}

function SobreScreen(props) {
  return (
    <SafeAreaView>
      <View style={ estilos.page }>
        <Text>
          Sobre - Desenvolvido por 2TDSA - 2022
        </Text>
      </View>
    </SafeAreaView>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title : 'Área inicial'
          }} />
        <Tab.Screen name="Sobre" component={SobreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const estilos = StyleSheet.create({
  page : {
    padding : 16
  }
})








