import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const ColourCounter = ({ colour, onIncrease, onDecrease }) => {
  return <View>
    <Text>{colour}</Text>
    <Button onPress={() => onIncrease()} title={`Increase ${colour}`}/>
    <Button onPress={() => onDecrease()} title={`Decrease ${colour}`}/>
  </View>
}

const styles = StyleSheet.create({})

export default ColourCounter