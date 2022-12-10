import { Dispatch, FunctionComponent, SetStateAction, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal'
import { centerContainer } from '../../public/css/container'
import shadow from '../../public/css/shadow'

const ExampleModal: FunctionComponent<{
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}> = ({ open, setOpen }) => {
  return (
    <Modal
      isVisible={open}
      onBackdropPress={() => {
        setOpen(false)
      }}
      onBackButtonPress={() => {
        setOpen(false)
      }}
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      backdropOpacity={0.4}
      animationInTiming={500}
      animationOutTiming={500}
      style={[centerContainer]}
      useNativeDriver
      hideModalContentWhileAnimating
    >
      <View
        style={{
          width: 300,
          height: 140,
          backgroundColor: 'white',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Modal Test</Text>
      </View>
    </Modal>
  )
}

const Home: FunctionComponent = () => {
  const [open, setOpen] = useState(false)

  return (
    <View style={[centerContainer]}>
      <Text>Home</Text>

      {/* Modal Test */}
      <TouchableOpacity
        onPress={() => {
          setOpen(true)
        }}
        style={{ backgroundColor: 'red', ...shadow }}
      >
        <Text>Modal Test Button</Text>
      </TouchableOpacity>
      <ExampleModal open={open} setOpen={setOpen} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default Home
