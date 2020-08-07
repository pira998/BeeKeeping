import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const AppNavigation = createStackNavigator({
    Splash:{
        screen:SplashScreen,
        navigationOptions:{
            headerShown:false,
            cardStyle: { backgroundColor: '#FFFFFF' },
        }
    },
    Login:{
        screen: LoginScreen,
        navigationOptions:{
            headerShown: false,
            cardStyle: { backgroundColor: '#FFFFFF' },
        }
    },
    Welcome:{
        screen:WelcomeScreen,
        navigationOptions:{
            headerShown:false,
            cardStyle: { backgroundColor: '#FFFFFF' },
        }
    }, 
    Signup: {
        screen: SignupScreen,
        navigationOptions: {
            headerShown: false,
            cardStyle: { backgroundColor: '#FFFFFF' },
        }

    }
})

export default createAppContainer(AppNavigation)