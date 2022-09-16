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
  

  return (
   <SafeAreaView>

   </SafeAreaView>
  )
}

export default Restaurant