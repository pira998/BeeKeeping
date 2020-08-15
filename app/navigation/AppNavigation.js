import React from 'react';
import {Image,Text} from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
// import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ForgetScreen from '../screens/ForgetScreen';
import TabNavigation from './TabNavigation'

import themes from '../styles/themes';

const Stack = createStackNavigator();

const AppNavigation =() => {

    return(

        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{
                    headerShown: false,
                    cardStyle: { backgroundColor: '#FFFFFF' },
                }}
            />
            <Stack.Screen
                name = "Welcome"
                component={WelcomeScreen}
                options={{
                    headerShown: false,
                    cardStyle: { backgroundColor: '#FFFFFF' },
                }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerTitle: ()=> null,
                        headerLeftContainerStyle: {
                        alignItems: 'center',
                        marginLeft: themes.sizes.base,
                        marginRight: themes.sizes.base,
                    // marginTop: themes.sizes.base,
                        },
                    headerRightContainerStyle: {
                        alignItems: 'center',
                        paddingRight: themes.sizes.base,
                        },
                    headerStyle: {
                        height: themes.sizes.base * 4,
                        backgroundColor: themes.colors.white,
                        borderBottomColor: "transparent",
                        elevation: 0,
                        },
                    headerBackImage:()=> <Image source={require('../resources/icons/back.png')} style={{ height: 20, width: 20 }} />,

                    cardStyle: { backgroundColor: '#FFFFFF' },
                        }}
                    />
            <Stack.Screen
                name = "Signup"
                component = {SignupScreen}
                options = {{
                headerTitle:()=> null,
                headerLeftContainerStyle: {
                    alignItems: 'center',
                    marginLeft: themes.sizes.base,
                    marginRight: themes.sizes.base,
                    // marginTop: themes.sizes.base,
                },
                headerRightContainerStyle: {
                    alignItems: 'center',
                    paddingRight: themes.sizes.base,
                },
                cardStyle: { backgroundColor: '#FFFFFF' },
                headerStyle: {
                    height: themes.sizes.base * 4,
                    backgroundColor: themes.colors.white,
                    borderBottomColor: "transparent",
                    elevation: 0,

                },
                headerBackImage:()=><Image source={require('../resources/icons/back.png')} style={{ height: 20, width: 20 }} />,

                }}
            />
            <Stack.Screen
                name = "Forget"
                component = {ForgetScreen}
            />
            <Stack.Screen
                name= "TabNavigation"
                component = {TabNavigation}
                options = {{
                    headerShown: false,
                }}
            
            />
        </Stack.Navigator>

    );

}
    
export default AppNavigation;








// const AppNavigation = createStackNavigator({
//     Splash:{
//         screen:SplashScreen,
//         navigationOptions:{
//             headerShown:false,
//             cardStyle: { backgroundColor: '#FFFFFF' },
//         }
//     },
//     Login:{
//         screen: LoginScreen,
//         navigationOptions:{
//             headerTitle: ()=> null,
//             headerLeftContainerStyle: {
//                 alignItems: 'center',
//                 marginLeft: themes.sizes.base,
//                 marginRight: themes.sizes.base,
//                 // marginTop: themes.sizes.base,
//             },
//             headerRightContainerStyle: {
//                 alignItems: 'center',
//                 paddingRight: themes.sizes.base,
//             },
//             headerStyle: {
//                 height: themes.sizes.base * 4,
//                 backgroundColor: themes.colors.white,
//                 borderBottomColor: "transparent",
//                 elevation: 0,
//             },
//             headerBackImage:()=> <Image source={require('../resources/icons/back.png')} style={{ height: 20, width: 20 }} />,

//             cardStyle: { backgroundColor: '#FFFFFF' },
            
//         }
        
        
//     },
//     Welcome:{
//         screen:WelcomeScreen,
//         navigationOptions:{
//             headerShown:false,
//             cardStyle: { backgroundColor: '#FFFFFF' },
//         }
//     }, 
//     Signup: {
//         screen: SignupScreen,
//         navigationOptions: {
//             headerTitle: null,
//             headerLeftContainerStyle: {
//                 alignItems: 'center',
//                 marginLeft: themes.sizes.base,
//                 marginRight: themes.sizes.base,
//                 // marginTop: themes.sizes.base,
//             },
//             headerRightContainerStyle: {
//                 alignItems: 'center',
//                 paddingRight: themes.sizes.base,
//             },
//             cardStyle: { backgroundColor: '#FFFFFF' },
//             headerStyle: {
//                 height: themes.sizes.base * 4,
//                 backgroundColor: themes.colors.white,
//                 borderBottomColor: "transparent",
//                 elevation: 0,

//             },
//             headerBackImage: <Image source={require('../resources/icons/back.png')} style={{ height: 20, width: 20 }} />,

      

//     }
//     },
//     Forgot:{
//         screen:ForgetScreen,
//     },
//     Apiaries:{
//         screen:ApiariesScreen,
//         navigationOptions:{
//             headerTitle:()=> <Text style={{fontFamily:'Poppins-Bold',textAlign:'center', fontSize:themes.sizes.header}}>Apiaries</Text>,
//             headerLeftContainerStyle: {
//                 alignItems: 'center',
//                 marginLeft: themes.sizes.base,
//                 marginRight: themes.sizes.base,
//                 // marginTop: themes.sizes.base,
//             },
//             headerRightContainerStyle: {
//                 alignItems: 'center',
//                 paddingRight: themes.sizes.base,
//             },
//             headerStyle: {
//                 height: themes.sizes.base * 6,
//                 backgroundColor: themes.colors.white,
//                 borderBottomColor: "transparent",
//                 elevation: 0,
                
//             },
//             headerLeft: () =>null,
//             cardStyle: { backgroundColor: '#FFFFFF' },
            
            
//         },
//         tabBarOption:{

//         }
//     }
// })
// const TabBarComponent = props => <BottomTabBar {...props} />;
// const TabScreens = createBottomTabNavigator(
//     {
        
//     },
//     {
//         tabBarComponent: props => (
//             <TabBarComponent {...props} style={{ borderTopColor: '#605F60' }} />
//         ),
//     }
// );
// export default createAppContainer(AppNavigation)