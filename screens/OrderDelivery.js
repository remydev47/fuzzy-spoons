import {  View,
  Text,
  Image,
  TouchableOpacity
 } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY } from "../constants"
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


function renderMap() {
  return (
    <View
      style={{ flex: 1 }}
    >
      <MapView
        style={{
          flex: 1
        }}
      >

      </MapView>
    </View>
  )
}

const OrderDelivery = () => {
  return (
    <SafeAreaView>
     {renderMap()}
    </SafeAreaView>
  )
}

export default OrderDelivery