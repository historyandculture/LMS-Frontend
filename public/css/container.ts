import { TextStyle } from 'react-native'

const container: TextStyle = {
  margin: 0,
  flex: 1,
}

const centerContainer: TextStyle = {
  ...container,
  justifyContent: 'center',
  alignItems: 'center',
}

export { container, centerContainer }
