import React,{Component} from "react";
import {StyleSheet} from "react-native";

import Block from "./Block";
import theme from "../styles/themes"

export default class Divider extends Component{
    render(){
        const {color,style,...props} = this.props;
        const dividerStyles = [styles.divider,style];

        return (
            <Block 
                color ={color||theme.colors.gray2}
                style = {dividerStyles}
                {...props}
                
            />
        );

    }



}

export const styles = StyleSheet.create({
    divider:{
        height:0,
        margin:5,
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth:StyleSheet.hairlineWidth,
        // borderColor:"#007AFF",
        elevation:1,
        borderRadius:2,
        paddingLeft:"80%",
        alignSelf:"center"
        
    }
});