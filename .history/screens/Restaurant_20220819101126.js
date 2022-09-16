import { View, Text, Image, TouchableOpacity, StyleSheet,Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons, COLORS, SIZES, FONTS }  from '../constants'
import React, { useState, useEffect } from 'react'

const Restaurant = ({ route }) => {

  const [restaurant, setRestaurant] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    let { item, currentLocation } = route.params;

    setRestaurant(item)
    setCurrentLocation(currentLocation)
  })
  
  function renderHeader() {
    return (
      <View style={{
        flexDirection: "row",

      }}>
        <TouchableOpacity
         style={{
          width: 50,
          paddingLeft: SIZES.padding * 2,
          justifyContent: "center"
         }}
         onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }

  return (
   <SafeAreaView style={styles.container}>
    {renderHeader()}
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2
  }
})

export default Restaurant