import React from 'react';
// import { createAppContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SettingScreen from '../screens/SettingScreen'
import ApiariesScreen from '../screens/ApiariesScreen'
import LiveHivesScreen from '../screens/LiveHivesScreen'
import DashboardScreen from '../screens/DashboardScreen'

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import themes from '../styles/themes' 

const Tabs = createMaterialBottomTabNavigator();

const TabNavigation = () => {
    return(
        <Tabs.Navigator
            tabBarOptions={
                {
                    activeTintColor: '#cd077d',
                    iconStyle:{}
                }
            }
            >
            <Tabs.Screen 
                name="Dashboard" 
                component={DashboardScreen}
                options={{
                    tabBarIcon: () => <Entypo name="home" size={25}/>
                }}
                />
            <Tabs.Screen 
                name="Apiaries" 
                component ={ApiariesScreen}
                options={{
                    tabBarIcon: () => <Entypo name="archive" size={25}/>
                }}
                />
            <Tabs.Screen 
                name="Setting" 
                component={SettingScreen} 
                options={{
                    tabBarIcon: ({ focused, horizontal, tintColor }) => <AntDesign name="setting" size={25} tintColor='#cd077d'/>
                }}   
                />
            <Tabs.Screen 
                name="LiveHives" 
                component={LiveHivesScreen}
                options={{
                    tabBarIcon: ({ focused, horizontal, tintColor }) => <FontAwesome name="forumbee" size={25} activeTintColor='#cd077d'active={focused}/>
                }}
                 />
        </Tabs.Navigator>
    )
}


export default TabNavigation;

















                // options={{
                //     headerShown:true,
                //     headerTitle: () => <Text style={{ fontFamily: 'Poppins-Bold', textAlign: 'center', fontSize: themes.sizes.header }}>Apiaries</Text>,
                //     headerLeftContainerStyle: {
                //         alignItems: 'center',
                //         marginLeft: themes.sizes.base,
                //         marginRight: themes.sizes.base,
                //         // marginTop: themes.sizes.base,
                //     },
                //     headerRightContainerStyle: {
                //         alignItems: 'center',
                //         paddingRight: themes.sizes.base,
                //     },
                //     headerStyle: {
                //         height: themes.sizes.base * 6,
                //         backgroundColor: themes.colors.white,
                //         borderBottomColor: "transparent",
                //         elevation: 0,

                //     },
                //     headerLeft: () => null,
                //     cardStyle: { backgroundColor: '#FFFFFF' },
                // }}