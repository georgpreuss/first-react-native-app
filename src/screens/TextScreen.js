import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {

  const [password, setPassword] = useState('')

  return <View>
    <Text>Enter password:</Text>
    <TextInput
      style={styles.input}
      autoCapitalize='none'
      autoCorrect={false}
      placeholder='enter password'
      value={password}
      onChangeText={(newValue) => setPassword(newValue)}
      textContentType='newPassword'
    />
    { password.length < 5 && <Text>Password must be longer than 4 characters</Text>}
  </View>
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
})

export default TextScreen