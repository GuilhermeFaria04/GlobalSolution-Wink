import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Importancia from './Pages/Importancia';
import Ameaca from './Pages/Ameaca';
import { Entypo } from '@expo/vector-icons';
import Beneficios from './Pages/Beneficios';
import Reducao from './Pages/Reducao';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Importancia do Oceanos"
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Entypo name="menu" size={24} color="white" style={{ marginLeft: 15 }} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Drawer.Screen name="Importancia dos Oceanos" component={Importancia} options={{ title: 'Importância dos Oceanos' }}/>
        <Drawer.Screen name="Ameaça aos Oceanos" component={Ameaca} options={{ title: 'Ameaça aos Oceanos' }}/>
        <Drawer.Screen name="Benefícios das Práticas" component={Beneficios} options={{ title: 'Benefícios das Práticas Sustentaveis' }}/>
        <Drawer.Screen name="Redução do Plastico" component={Reducao} options={{ title: 'Redução do Plastico' }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
