import { Provider } from 'react-redux'
import { store } from './redux/store'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LandingScreen from './screens/0-Landing/LandingScreen'
import AuthScreen from './screens/1-Auth/AuthScreen'
import HomeScreen from './screens/2-Home/HomeScreen'
import 'react-native-gesture-handler'

export default function App() {
  const Stack = createStackNavigator()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name='LandingScreen' component={LandingScreen} options={{headerShown: false}}/>
            <Stack.Screen name='AuthScreen' component={AuthScreen} options={{headerShown: false}}/>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown: false}}/>
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  )
}