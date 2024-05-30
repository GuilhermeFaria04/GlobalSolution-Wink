import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Importancia from './Pages/Importancia';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Importancia dos Oceanos">
        <Drawer.Screen name="Importancia dos Oceanos" component={Importancia} options={{ headerShown: false }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
