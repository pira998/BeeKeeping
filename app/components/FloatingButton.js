import React, { Component } from 'react'
import { View,StyleSheet,Image} from 'react-native'
import {Text,Block} from '../components'
import {Animated} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

class FloatingButton extends Component {
    animation = new Animated.Value(0);

    toggleMenu = () => {
        const toValue = this.open ? 0 :1 ;

        Animated.spring(this.animation,{
            toValue,
            friction:5,
            useNativeDriver:false
        
        }).start();
        this.open = !this.open;
    }
    render() {
        const pinStyle = {
            transform:[
                {scale:this.animation},
                {
                    translateY:this.animation.interpolate({
                        inputRange:[0,1],
                        outputRange:[0,-80]
                    })
                }
            ]
        }
        const thumbStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -140]
                    })
                }
            ]
        }
        const heartStyle = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -200]
                    })
                }
            ]
        }
        const rotation = {
            transform : [
                {
                    rotate:this.animation.interpolate({
                        inputRange:[0,1],
                        outputRange:["0deg","405deg"],
                        
                    })
                }
            ]
        }
        const opacity = this.animation.interpolate({
            inputRange:[0,0.5,1],
            outputRange:[0,0,1]
        })

        return (
            <View style={[styles.container,this.props.style]}>
                <TouchableWithoutFeedback>

                    <Animated.View style={[styles.button, styles.secondary,heartStyle,opacity]}>
                        <AntDesign name='plus' size={20} color="#F3534A" />
                    </Animated.View>
                    
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.secondary,thumbStyle,opacity]}>
                        <AntDesign name='plus' size={20} color="#F3534A" />
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                        <Animated.View style={[styles.button, styles.secondary, pinStyle, opacity]}>
                            <Entypo name='archive' size={20} color="#F3534A" />
                        </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button,styles.menu,rotation]}>
                        {/* <AntDesign name = 'plus' size={24} color = "#FFF"/>
                         */}
                         <Image source={require('../resources/icons/bee-color.png')} style={{height:50,width:50}}/>

                         
                    </Animated.View>
                </TouchableWithoutFeedback>

            </View>
        )
    }
}

export default FloatingButton;

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        position:'absolute'
    },
    button :{
        position: "absolute",
        width:60,
        height:60,
        borderRadius:60/2,
        alignItems:"center",
        justifyContent:"center",
        // shadowRadius: 20,
        elevation:10,
        shadowColor: "#777",
        // shadowOpacity:1,
        // shadowOffset: {height:10}
    },
    menu:{
        backgroundColor:"#ffcc22"
    },
    secondary:{
        width  : 48,
        height: 48,
        borderRadius: 48/2,
        backgroundColor: "#FFF"
    }

    
})