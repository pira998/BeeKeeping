import React from 'react';
import {Image,Text} from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
import {
    SplashScreen,
    LoginScreen,
    SignupScreen,
    WelcomeScreen,
    ForgetScreen,
    FirstScreen,
    ApiaryScreen,
    HiveScreen,
    TasksScreen,
    EditApiaryScreen,
    WeatherScreen,
    HivesScreen,
    StandardInspectionScreen,
    HarvestInspectionScreen,
    QueenInspectionScreen,
    TreatmentInspectionScreen,
    OnlineInspectionScreen,
    FeedInspectionScreen,
    SecondScreen,
    SampleScreen

} from '../screens';
    

import TabNavigation from './TabNavigation'

import themes from '../styles/themes';
import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBJW4swfwzTJxgpzv3pMuqcnd-7OPv_mGo",
    authDomain: "beeapp-30ce4.firebaseapp.com",
    databaseURL: "https://beeapp-30ce4.firebaseio.com",
    projectId: "beeapp-30ce4",
    storageBucket: "beeapp-30ce4.appspot.com",
    messagingSenderId: "197911033206",
    appId: "1:197911033206:web:a04a7e8272ce66f4ac7657",
    measurementId: "G-CTZQMH85CQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




const Stack = createStackNavigator();

const AppNavigation =() => {

    return(

        <Stack.Navigator initialRouteName="First">
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
            <Stack.Screen
                name="Apiary"
                component = {ApiaryScreen}
                options ={{
                    headerShown:false,
                }}
            />
            <Stack.Screen  
                name="Hive"
                component = {HiveScreen}
                options={{
                    headerShown: false,

                }}


                />
            <Stack.Screen
                name="Hives"
                component={HivesScreen}
                options={{
                    headerShown: false,

                }}


            />
            <Stack.Screen
                name="Tasks"
                component={TasksScreen}
                options={{
                    headerShown: false,
                }}


            />
            <Stack.Screen
                name="Weather"
                component={WeatherScreen}
                options={{
                    headerShown: false,

                }}


            />
            <Stack.Screen
                name="EditApiary"
                component={EditApiaryScreen}
                options={{
                    headerShown: false,
                }}


            />
            <Stack.Screen
                name="StandardInspection"
                component={StandardInspectionScreen}
                options={{
                    headerShown: false,
                }}


            />
            <Stack.Screen
                name="FeedInspection"
                component={FeedInspectionScreen}
                options={{
                    headerShown: false,
                }}


            />
            <Stack.Screen
                name="QueenInspection"
                component={QueenInspectionScreen}
                options={{
                    headerShown: false,
                }}


            />
            <Stack.Screen
                name="HarvestInspection"
                component={HarvestInspectionScreen}
                options={{
                    headerShown: false,
                }}


            />
            <Stack.Screen
                name="TreatmentInspection"
                component={TreatmentInspectionScreen}
                options={{
                    headerShown: false,
                }}

            />
            <Stack.Screen
                name="OnlineInspection"
                component={OnlineInspectionScreen}
                options={{
                    headerShown: false,
                }}


            />
            <Stack.Screen
                name="First"
                component={FirstScreen}
                options={{
                    headerShown: false,
                }}


            />
            <Stack.Screen
                name="Second"
                component={SecondScreen}
                options={{
                    headerShown: false,
                }}


            />
            <Stack.Screen
                name="Sample"
                component={SampleScreen}
                options={{
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