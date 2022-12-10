import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { FunctionComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from './screens/Home'
import Notice from './screens/Notice'
import Detail from './screens/Detail'
import shadow from '../public/css/shadow'
import { container } from '../public/css/container'

const Tab = createBottomTabNavigator()

const App: FunctionComponent = () => {
  return (
    <SafeAreaView style={[container]}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{ tabBarActiveTintColor: '#94b2e2' }}
          initialRouteName="Home"
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              header: () => {
                return (
                  <View
                    style={[
                      styles.header,
                      { backgroundColor: 'white', height: 60 },
                    ]}
                  >
                    <Text
                      style={[
                        styles.headerText,
                        { color: 'black', fontSize: 20, letterSpacing: 0.8 },
                      ]}
                    >
                      LMS
                    </Text>
                    <Text
                      style={[
                        styles.headerText,
                        {
                          color: '#7991b9',
                          fontSize: 10,
                        },
                      ]}
                    >
                      SYU E-Class
                    </Text>
                  </View>
                )
              },
              tabBarLabel: ({ color }) => {
                return (
                  <Text style={[styles.tabBarLabel, { color: color }]}>홈</Text>
                )
              },
              tabBarIcon: ({ focused, color }) => {
                return (
                  <Ionicons
                    name={focused ? 'home' : 'home-outline'}
                    color={color}
                    size={20}
                  />
                )
              },
            }}
          />
          <Tab.Screen
            name="Notice"
            component={Notice}
            options={{
              header: () => {
                return (
                  <View style={[styles.header]}>
                    <Text style={[styles.headerText]}>알림</Text>
                  </View>
                )
              },
              tabBarLabel: ({ color }) => {
                return (
                  <Text style={[styles.tabBarLabel, { color: color }]}>
                    알림
                  </Text>
                )
              },
              tabBarIcon: ({ focused, color }) => {
                return (
                  <Octicons
                    name={focused ? 'bell-fill' : 'bell'}
                    color={color}
                    size={20}
                  />
                )
              },
            }}
          />
          <Tab.Screen
            name="Detail"
            component={Detail}
            options={{
              header: () => {
                return (
                  <View style={[styles.header]}>
                    <Text style={[styles.headerText]}>더보기</Text>
                  </View>
                )
              },
              tabBarLabel: ({ color }) => {
                return (
                  <Text style={[styles.tabBarLabel, { color: color }]}>
                    더보기
                  </Text>
                )
              },
              tabBarIcon: ({ color }) => {
                return (
                  <Feather name="more-horizontal" size={20} color={color} />
                )
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#94b2e2',
    ...shadow,
  },
  headerText: {
    fontFamily: 'NanumSquare_acEB',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  tabBarLabel: {
    fontFamily: 'NanumSquare_acB',
    fontSize: 10,
  },
})

export default App
