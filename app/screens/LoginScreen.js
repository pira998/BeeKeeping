import React, { Component } from "react";
import {View,
    ActivityIndicator,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import  theme  from "../styles/themes";
import * as firebase from "firebase"

const VALID_EMAIL = "";
const VALID_PASSWORD = "";


export default class LoginScreen extends Component {
    state = {
        email: VALID_EMAIL,
        password: VALID_PASSWORD,
        errors: null,
        loading: false
    };
    

    handleLogin() {
        
        const { navigation } = this.props;
        const { email, password,loading,errors } = this.state;
       

        Keyboard.dismiss();
        
        this.setState({ loading: true });

        // check with backend API or with some static data

        firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .catch(error => {this.setState({loading: false})
                    this.setState({errors:error})
        })
        

        if (!errors) {
            navigation.navigate('TabNavigation');
        }
    }

    render() {
        const { navigation } = this.props;
        const { loading,errors} = this.state;
        const hasErrors = () => (errors ? styles.hasErrors : null);
        const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : -55
        return (
            
            <KeyboardAvoidingView style={styles.login} behavior="height" keyboardVerticalOffset={keyboardVerticalOffset}>
                <Block padding={[0, theme.sizes.base * 2]}>
                    <Block center flex={0.2}>
                        <Text h1 bold center accent >
                            Login
          </Text>
                    </Block>
                    <Block flex={0.2}>
                        
                        
                        <Input
                            placeholder="Email"
                            
                            style={[styles.input, hasErrors()]}
                            defaultValue={this.state.email}
                            onChangeText={text => this.setState({ email: text })}
                        />
                        <Input
                            secure
                            placeholder="Password"
                            style={[styles.input, hasErrors()]}
                            defaultValue={this.state.password}
                            onChangeText={text => this.setState({ password: text })}
                        />
                        <Button gradient shadow onPress={() => this.handleLogin()}>
                            {loading ? (
                                <ActivityIndicator size="small" color="white" />
                            ) : (
                                    <Text bold white center>
                                        Login
                                    </Text>
                                )}
                        </Button>

                        <Button onPress={() => navigation.navigate("Forgot")}>
                            <Text
                                gray
                                caption
                                center
                                style={{ textDecorationLine: "underline" }}
                            >
                                Forgot your password?
              </Text>
                        </Button>
                    </Block>
                </Block>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    login: {
        flex: 1,
        justifyContent: "center",
        
    },
    input: {
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    hasErrors: {
        borderBottomColor: theme.colors.accent
    }
});