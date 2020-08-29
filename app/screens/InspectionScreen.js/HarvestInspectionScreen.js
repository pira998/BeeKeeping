import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class HarvestInspectionScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleBar}>
                    <View style={styles.camera}>

                    </View>
                    <View style={styles.title}>

                    </View>
                    <View style ={styles.note}>

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        backgroundColor:"#fff",
    },
    titleBar:{
        flexDirection:"row" 
    }

})
