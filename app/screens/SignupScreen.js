import React, { Component } from "react";
import {
    Alert,
    ActivityIndicator,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import theme from "../styles/themes";

export default class SignupScreen extends Component {
    state = {
        email: null,
        username: null,
        password: null,
        errors: [],
        loading: false
    };

    handleSignUp() {
        const { navigation } = this.props;
        const { email, username, password } = this.state;
        const errors = [];

        Keyboard.dismiss();
        this.setState({ loading: true });

        // check with backend API or with some static data
        if (!email) errors.push("email");
        if (!username) errors.push("username");
        if (!password) errors.push("password");

        this.setState({ errors, loading: false });

        if (!errors.length) {
            Alert.alert(
                "Success!",
                "Your account has been created",
                [
                    {
                        text: "Continue",
                        onPress: () => {
                            navigation.navigate("FirstScreen");
                        }
                    }
                ],
                { cancelable: false }
            );
        }
    }

    render() {
        const { navigation } = this.props;
        const { loading, errors } = this.state;
        const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
        const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 :0

        return (
        <KeyboardAvoidingView style={styles.signup} behavior="" keyboardVerticalOffset={keyboardVerticalOffset}>
                
                <Block padding={[0, theme.sizes.base * 2]}>
                    <Block center flex={0.1}>
                        <Text h1 bold center accent>
                            Sign Up
                        </Text>
                    </Block>  
                    <Block  flex={0.2}>
                          
                        <Input
                            email
                            placeholder="Email"
                            error={hasErrors("email")}
                            style={[styles.input, hasErrors("email")]}
                            defaultValue={this.state.email}
                            onChangeText={text => this.setState({ email: text })}
                        />
                        <Input
                            placeholder="Username"
                            error={hasErrors("username")}
                            style={[styles.input, hasErrors("username")]}
                            defaultValue={this.state.username}
                            onChangeText={text => this.setState({ username: text })}
                        />
                        <Input
                            secure
                            placeholder="Password"
                            error={hasErrors("password")}
                            style={[styles.input, hasErrors("password")]}
                            defaultValue={this.state.password}
                            onChangeText={text => this.setState({ password: text })}
                        />
                        <Button gradient shadow onPress={() => this.handleSignUp()}>
                            {loading ? (
                                <ActivityIndicator size="small" color="white" />
                            ) : (
                                    <Text bold white center>
                                        Sign Up
                                    </Text>
                                )}
                        </Button>

                        <Button onPress={() => navigation.navigate("Login")}>
                            <Text
                                gray
                                caption
                                center
                                style={{ textDecorationLine: "underline" }}
                            >
                                Back to Login
              </Text>
                        </Button>
                    </Block>
                </Block>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    signup: {
        flex: 1,
        justifyContent: "flex-end",
        // marginTop:30
        
        
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