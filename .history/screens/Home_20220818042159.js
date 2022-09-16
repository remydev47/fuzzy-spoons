import { View, Text, TouchableOpacity,StyleSheet, Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { COLORS } from '../constants'


const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  }
})

export default Home