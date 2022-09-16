import react from "react";
import React from react;
import { View,Image, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import { Home } from "../screens";

import { COLORS, icons } from '../constants'

const Tab =  createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen 
               name="Home"
               component={Home}
               options={{
                tabBarIcon: ({forcus}) => (
                    <Image 
                       source={icons.cat}
                    />
                )
               }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;