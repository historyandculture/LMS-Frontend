import { FunctionComponent } from 'react'
import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './src/App'

const Index: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => Index)
