import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {

  return <View>
    <Text style={styles.text}>Hello React Native</Text>
    <Button
      onPress={() => navigation.navigate('Components')}
      title='Go to components demo'
    />
    <Button
      onPress={() => navigation.navigate('List')}
      title='Go to list demo'
    />
    <Button
      onPress={() => navigation.navigate('Image')}
      title='Go to image demo'
    />
    <Button
      onPress={() => navigation.navigate('Counter')}
      title='Go to counter demo'
    />
    <Button
      onPress={() => navigation.navigate('Colour')}
      title='Go to colour demo'
    />
    <Button
      onPress={() => navigation.navigate('Square')}
      title='Go to square demo'
    />
    <Button
      onPress={() => navigation.navigate('Text')}
      title='Go to text demo'
    />
    <Button
      onPress={() => navigation.navigate('Box')}
      title='Go to box demo'
    />
    {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text>Go to list demo</Text>
      <Text>Go to list demo</Text>
      <Text>Go to list demo</Text>
    </TouchableOpacity> */}
  </View>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default HomeScreen