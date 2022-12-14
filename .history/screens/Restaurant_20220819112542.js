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

  function renderFoodInfo() {
    return(
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsVerticalScrollIndicator={false}
        //onScroll
      >
        {
          restaurant?.menu.map((item, index) => {
            <View
               key={`menu-${index}`}
               style={{
                alignItems:"center"
               }}
            >
              <View
                style={{
                  height: SIZES.height * 0.35,
                }}
              >
                <Image 
                  source={icons.photo}
                  resizeMode="contain"
                  style={{
                    width: SIZES.width,
                    height: "100%"
                  }}
                />
                {/* Quantity section */}
                <View
                  style={{
                    position: "absolute",
                    bottom: -20,
                    width: SIZES.width,
                    height: 50,
                    justifyContent: "center",
                    flexDirection:"row"
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 50,
                      backgroundColor: COLORS.white,
                      alignItems: "center",
                      justifyContent: "center",
                      borderTopLeftRadius: 25,
                      borderTopRightRadius: 25
                    }}
                  >
                    <Text style={{...FONTS.body1}}>-</Text>
                  </TouchableOpacity>
                  <View style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <Text style={{...FONTS.h2}}>5</Text>
                  </View>

                </View>
              </View>
            </View>
          })
        }
      </Animated.ScrollView>
    )
  }

  return (
   <SafeAreaView style={styles.container}>
    {renderHeader()}
    {renderFoodInfo()}
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