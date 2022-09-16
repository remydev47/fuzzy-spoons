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
          {/* Restaurantname */}

          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View
              style={{
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: SIZES.padding * 3,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray3
              }}
            >
              <Text style={{ ...FONTS.h3 }}>{restaurant?.name}</Text>
            </View>
          </View>
        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: "center"
          }}
        >
          <Image 
             source={icons.list}
             resizeMode= "contain"
             style={{
              height: 30,
              width: 30
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