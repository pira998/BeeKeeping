import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { ToggleButton } from 'react-native-paper'
import { act } from 'react-test-renderer'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class SampleScreen extends Component {
    
    state = {
        sunExposure: 0,
        sunExposures : ['SunLight','Shade','LowLight']
    }
    
    
    render() {
        const isActiveButton = (value_1,value_2) => (value_1==value_2? styles.radioBtnActive: styles.radioBtn) 
        const isActiveIcon = (value_1, value_2) => (value_1== value_2? styles.iconActive : styles.icon);
        
        return (
            <View style={styles.mainContainer}>
                {
                    this.state.sunExposures.map((data, index) => {
                        return (
                            <View style={styles.radioButtons}>
                                <TouchableOpacity activeOpacity={1} onPress={() => this.setState({ sunExposure: index })}>
                                    <View style={[isActiveButton(this.state.sunExposures[this.state.sunExposure], data)]}>

                                        <Icon name="sun" style={[isActiveIcon(this.state.sunExposures[this.state.sunExposure], data)]} size={40} />
                                    </View>
                                </TouchableOpacity>


                            </View>
                        )



                    }) 
                }
            </View>
           
            
        )
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection:"row",
        flex:1,
        alignItems: "center",
        justifyContent:"center"
    
    },
    radioButtons:{
        
        
        

    },
    radioBtn:{
        margin:20,
        width:80,
        height:80,
        borderColor:"#bdbdbd",
        borderRadius:40,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center",
        elevation:10,

        borderStyle:"solid",
        borderWidth:2


    },
    icon:{
        color:"#bdbdbd"  
    },
    iconActive:{
        color:"#1211ff"
    },
    radioBtnActive:{
        margin: 20,
        width: 100,
        height: 100,
        borderColor: "#1211ff",
        borderRadius: 50,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,

        borderStyle: "solid",
        borderWidth: 2
        

        
        
    }
    



})


    // < View style = { styles.mainContainer } >

    //     <View style={styles.radioButtons}>
    //         <TouchableOpacity activeOpacity={1} onPress={() => this.setState({ sunExposure: 1 })}>
    //             <View style={[isActiveButton(this.state.sunExposures[this.state.sunExposure], 'Shade')]}>

    //                 <Icon name="sun" style={[isActiveIcon(this.state.sunExposures[this.state.sunExposure], 'Shade')]} size={40} />
    //             </View>
    //         </TouchableOpacity>


    //     </View>
    //     <View style={styles.radioButtons}>
    //         <TouchableOpacity activeOpacity={1} onPress={() => this.setState({ sunExposure: 2 })}>
    //             <View style={[isActiveButton(this.state.sunExposures[this.state.sunExposure], 'LowLight')]}>

    //                 <Icon name="sun" style={[isActiveIcon(this.state.sunExposures[this.state.sunExposure], 'LowLight')]} size={40} />
    //             </View>
    //         </TouchableOpacity>


    //     </View>
    //         </View >