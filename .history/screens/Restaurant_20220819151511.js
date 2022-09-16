import { View, Text, Image, TouchableOpacity, StyleSheet,Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons, COLORS, SIZES, FONTS }  from '../constants'
import React, { useState, useEffect } from 'react'

const Restaurant = ({ route, navigation }) => {

  const scrollX = new Animated.Value(0);
  const [restaurant, setRestaurant] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [orderItems, setOrderItems] = useState([])

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
        onScroll={Animated.event([
          {nativeEvent: {contentOff: {x: scrollX}}}
        ], {useNativeDriver: false})}
      >
        {
          restaurant?.menu.map((item, index) => (
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
                  source={item.photo}
                  resizeMode="cover"
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
                      borderTopLeftRadius: 25
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
                  <TouchableOpacity
                    style={{
                      width: 50,
                      backgroundColor: COLORS.white,
                      alignItems: "center",
                      justifyContent: "center",
                      borderTopRightRadius: 25,
                      borderBottomRightRadius: 25,
                    }}
                  >
                    <Text style={{...FONTS.body1}}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* Name and Description */}
              <View
                style={{
                  width: SIZES.width,
                  alignItems: "center",
                  marginTop: 15,
                  paddingHorizontal: SIZES.padding * 2
                }}
              >
                <Text
                  style={{
                    marginVertical: 10,
                    textAlign: "center",
                    ...FONTS.h2
                  }}
                >
                  {item.name} - {item.price.toFixed(2)}
                </Text>
                <Text style={{ ...FONTS.body3}}>{item.description}</Text>
              </View>
              {/* calories */}
              <View 
               style={{
                flexDirection: "row",
                marginTop: 10
               }}
              >
                <Image 
                  source={icons.fire}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.darkgray
                  }}
                >
                  {item.calories.toFixed(2)}cal
                </Text>
              </View>

            </View>
          ))
       }
      </Animated.ScrollView>
    )
  }

  function renderDots() {
    const dotPosition = Animated.divide(scrollX, SIZES.width)

    return (
      <View
        style={{
          height: 30,

        }}
      >
        <View
          style={{
            flexDirection: "center",
            alignItems:"center",
            justifyContent: "center",
            height: SIZES.padding
          }}
        >
          {restaurant?.menu.map((item, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index -1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate:"clamp"
            })
            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [SIZES.base * 0.8, SIZES.base * 0.8 ],
              extrapolate: "clamp"
            })
            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
              extrapolate: "clamp"
          })
            return (
              <Animated.View
                 key={`dot-${index}`}
                 opacity={opacity}
                 style={{
                  borderRadius: SIZES.radius,
                  marginHorizontal: 6,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor
                 }}
                />
            )
         })}
        </View>
      </View>
    )
  }

  function renderOrder() {
    return(
      <View>
        {
          renderDots()
        }
        <View
          style={{
            backgroundColor:COLORS.white,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40
          }}
        >
          <View 
            style={{
              flexDirection : "row",
              justifyContent: "space-between",
              paddingVertical: SIZES.padding * 2,
              paddingHorizontal: SIZES.padding *3,
              borderBottomColor: COLORS.lightGray2,
              borderBottomWidth: 1
            }}
          >
           <Text
             style={{...FONTS.h3}}
           >
             items in cart
           </Text>
          </View>
        </View>

      </View>
    )
  }

  return (
   <SafeAreaView style={styles.container}>
    {renderHeader()}
    {renderFoodInfo()}
    {renderOrder()}
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