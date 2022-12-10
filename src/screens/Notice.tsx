import { FunctionComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { centerContainer } from '../../public/css/container'

const Notice: FunctionComponent = () => {
  return (
    <View style={[centerContainer]}>
      <Text>Notice</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default Notice
