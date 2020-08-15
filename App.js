import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from '../B/app/navigation/AppNavigation'
// import TabNavigator from '../B/app/navigation/TabNavigator'

function App(){
    return (
        <NavigationContainer>
            <AppNavigation />
        </NavigationContainer>

    )
}

export default App;