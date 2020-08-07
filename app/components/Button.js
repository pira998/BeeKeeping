import React, { Component } from "react";
import  {StyleSheet, TouchableOpacity}  from "react-native";
import LinearGradient  from "react-native-linear-gradient";
import theme from "../styles/themes";



class Button extends Component {
    
    render() {

        const {
            style,
            opacity,
            gradient,
            color,
            startColor,
            endColor,
            end,
            start,
            locations,
            liteShadow,
            shadow,
            children,
            ...props
        } = this.props;

        const buttonStyles = [
            styles.button,
            liteShadow && styles.liteShadow,
            shadow && styles.shadow,
            color && styles[color], // predefined styles colors for backgroundColor
            color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
            style
        ];

        if (gradient) {
            return (
                <TouchableOpacity
                    style={buttonStyles}
                    activeOpacity={opacity}
                    {...props}
                >
                    <LinearGradient
                        start={start}
                        end={end}
                        locations={locations}
                        style={buttonStyles}
                        colors={[startColor, endColor]}
                    >
                        {children}
                    </LinearGradient>
                </TouchableOpacity>
            );
        }

        return (
            <TouchableOpacity
                style={buttonStyles}
                activeOpacity={opacity || 0.8}
                {...props}
            >
                {children}
            </TouchableOpacity>
        );
    }
}

Button.defaultProps = {
    startColor: theme.colors.primary,
    endColor: theme.colors.accent,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    locations: [0.1, 0.9],
    opacity: 0.8,
    color: theme.colors.white,

};


export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: theme.sizes.radius,
        height: theme.sizes.base * 3,
        justifyContent: "center",
        marginVertical: theme.sizes.padding / 3
    },
    liteShadow: {
        shadowColor: "#786",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.43,
        shadowRadius: 10,

        elevation: 10
        ,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 10,

        elevation: 10
        ,
    },
    accent: { backgroundColor: theme.colors.accent },
    primary: { backgroundColor: theme.colors.primary },
    secondary: { backgroundColor: theme.colors.secondary },
    tertiary: { backgroundColor: theme.colors.tertiary },
    black: { backgroundColor: theme.colors.black },
    white: { backgroundColor: theme.colors.white },
    gray: { backgroundColor: theme.colors.gray },
    gray2: { backgroundColor: theme.colors.gray2 },
    
});