import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "./Button";

import Text from "./Text";
import Block from "./Block";
import theme from "../styles/themes";

export default class Input extends Component {
    state = {
        toggleSecure: false
    };

    renderLabel() {
        const { label, error } = this.props;

        return (
            <Block flex={false}>
                {label ? (
                    <Text gray2={!error} accent={error}>
                        {label}
                    </Text>
                ) : null}
            </Block>
        );
    }

    renderToggle() {
        const { secure, rightLabel } = this.props;
        const { toggleSecure } = this.state;

        if (!secure) return null;

        return (
            <Button
                style={styles.toggle}
                onPress={() => this.setState({ toggleSecure: !toggleSecure })}
            >
                {rightLabel ? (
                    rightLabel
                ) : (
                        <Icon
                            color={theme.colors.gray}
                            size={theme.sizes.font * 1.35}
                            name={!toggleSecure ? "md-eye" : "md-eye-off"}
                        />
                    )}
            </Button>
        );
    }

    renderRight() {
        const { rightLabel, rightStyle, onRightPress } = this.props;

        if (!rightLabel) return null;

        return (
            <Button
                style={[styles.toggle, rightStyle]}
                onPress={() => onRightPress && onRightPress()}
            >
                {rightLabel}
            </Button>
        );
    }

    render() {
        const { email, phone, number, secure, error, style,placeholder, autoComplete, ...props } = this.props;

        const { toggleSecure } = this.state;
        const isSecure = toggleSecure ? false : secure;

        const inputStyles = [
            styles.input,
            error && { borderColor: theme.colors.accent },
            style
        ];

        const inputType = email
            ? "email-address"
            : number
                ? "numeric"
                : phone
                    ? "phone-pad"
                    : "default";

        return (
            <Block flex={false} margin={[theme.sizes.base, 0]}>
                {/* {this.renderLabel()} */}
                <TextInput
                    style={inputStyles}
                    placeholder={placeholder}
                    secureTextEntry={isSecure}
                    autoComplete={autoComplete}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType={inputType}
                    {...props}
                />
                {this.renderToggle()}
                {this.renderRight()}
            </Block>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: theme.colors.black,
        borderRadius: theme.sizes.radius,
        fontSize: theme.sizes.font,
        fontWeight: "500",
        color: theme.colors.black,
        height: theme.sizes.base * 3
    },
    toggle: {
        position: "absolute",
        alignItems: "flex-end",
        width: theme.sizes.base * 2,
        height: theme.sizes.base * 2,
        top: theme.sizes.base,
        right: 0
    }
});