import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import { Home, Restaurant, OrderDelivery } from './screens'

const Stack = createStackNavigator

 const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      
      >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
