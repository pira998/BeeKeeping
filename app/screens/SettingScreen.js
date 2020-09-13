import React, { Component } from 'react';
import { Text, Button } from '../components';
import { Block } from '../components';
import { View } from 'react-native';
import * as firebase from 'firebase'

export default class LoginScreen extends Component {

    signOut=()=>{
        firebase.auth().signOut()
    }
    render() {
        return (
            <View style= {{alignContent:"center",margin:100}}>
                
                <Button gradient shadow onPress={this.signOut}>
                    <Text center bold>Sign out</Text>
                </Button>
            </View>
        )

    }
}