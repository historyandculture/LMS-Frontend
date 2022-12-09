import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from './screens/Home'
import Setting from './screens/Setting'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons name={focused ? 'home' : 'home-outline'} size={20} />
              )
            },
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? 'md-settings-sharp' : 'md-settings-outline'}
                  size={22}
                />
              )
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
