import React, { Component } from 'react';
import { SafeAreaView,ScrollView,StyleSheet,Text,View,Image } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import { TouchableOpacity } from 'react-native-gesture-handler';
// import {Block} from '../components'


export default class DashboardScreen extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.titleBar}>
                        <Ionicons name='chevron-back' size={24} color="#000"></Ionicons>
                        <Text style={[{fontSize: 20,fontFamily:"Poppins-Bold" }]}>BeeHappy DashBoard</Text>
                        <MaterialIcons name='more-vert' size={24} color="#000"></MaterialIcons>

                    </View>
                
                    <View style={styles.infoContainer}>
                        
    
                    </View>
                    <View style = {{alignItems:"center"}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={[styles.count, { alignSelf: "center" }]} >
                                <View style={styles.cardIcon} flexDirection="row">
                                    <Octicons name="archive" size={36} color="#000" onPress={() => alert("Edit Photo")} />
                                </View>
                                <Text style={[styles.text, { fontSize: 50, color: "#000" }]}>290</Text>
                                <Text style={[styles.text, { fontSize: 20, color: "#000", textTransform: "uppercase" }]}>Apiaries</Text>
                            </View>
                            <View style={[styles.count, { alignSelf: "center"}]} >
                                    <View style={styles.cardIcon} flexDirection="row">
                                    <Octicons name="archive" size={36} color="#000" onPress={() => alert("Edit Photo")} />
                                    </View>
                                    <Text style={[styles.text, { fontSize: 50, color: "#000" }]}>990</Text>
                                <Text style={[styles.text, { fontSize: 20, color: "#000", textTransform: "uppercase" }]}>Hives</Text>
                            </View>
                            <View style={[styles.count, { alignSelf: "center" }]} >
                                <View style={styles.cardIcon} flexDirection="row">
                                    <Octicons name="archive" size={36} color="#000" onPress={() => alert("Edit Photo")} />
                                </View>
                                <Text style={[styles.text, { fontSize: 50, color: "#000" }]}>199</Text>
                                <Text style={[styles.text, { fontSize: 20, color: "#000", textTransform: "uppercase" }]}>Tasks</Text>
                            </View>
                           
                            <View style={[styles.count, { alignSelf: "center" }]} >
                                <View style={styles.cardIcon} flexDirection="row">
                                    <Octicons name="archive" size={36} color="#000" onPress={() => alert("Edit Photo")} />
                                </View>
                                <Text style={[styles.text, { fontSize: 50, color: "#000" }]}>390</Text>
                                <Text style={[styles.text, { fontSize: 20, color: "#000", textTransform: "uppercase" }]}>Honey</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <Text style={{ fontFamily: "Poppins-Regular",marginLeft:20,color:"#777" }}>Recent Activities</Text>

                    <View style={[styles.recentItemContainer, {flexDirection: "row",justifyContent:'space-evenly'}]}>

                        <Ionicons name='checkmark-done-circle' size={24} color="#000" style={{marginRight:5,marginLeft:0}}></Ionicons>
                        <View>
                            <Text style={[styles.text, { color: "#000", fontSize: 12 }]}>Colony Inspection </Text>
                            <Text style={[styles.text, { color: "#777", fontSize: 9 }]}>An hour ago</Text>

                        </View>
                        <TouchableOpacity><Text style={[styles.text, { color: "#000", fontSize: 12 }]}>#Hive_Id</Text></TouchableOpacity>

                    
                      </View>
                    <View style={[styles.recentItemContainer, { flexDirection: "row", justifyContent: 'space-evenly' }]}>

                        <Ionicons name='checkmark-done-circle' size={24} color="#000" style={{ marginRight: 5, marginLeft: 0 }}></Ionicons>
                        <View>
                            <Text style={[styles.text, { color: "#000", fontSize: 12 }]}>Colony Inspection </Text>
                            <Text style={[styles.text, { color: "#777", fontSize: 9 }]}>An hour ago</Text>

                        </View>
                        <TouchableOpacity><Text style={[styles.text, { color: "#000", fontSize: 12 }]}>#Hive_Id</Text></TouchableOpacity>


                    </View>
                    <View style={[styles.recentItemContainer, { flexDirection: "row", justifyContent: 'space-evenly' }]}>

                        <Ionicons name='checkmark-done-circle' size={24} color="#000" style={{ marginRight: 5, marginLeft: 0 }}></Ionicons>
                        <View>
                            <Text style={[styles.text, { color: "#000", fontSize: 12 }]}>Colony Inspection </Text>
                            <Text style={[styles.text, { color: "#777", fontSize: 9 }]}>An hour ago</Text>

                        </View>
                        <TouchableOpacity><Text style={[styles.text, { color: "#000", fontSize: 12 }]}>#Hive_Id</Text></TouchableOpacity>


                    </View>
                    <View style={[styles.recentItemContainer, { flexDirection: "row", justifyContent: 'space-evenly' }]}>

                        <Ionicons name='checkmark-done-circle' size={24} color="#000" style={{ marginRight: 5, marginLeft: 0 }}></Ionicons>
                        <View>
                            <Text style={[styles.text, { color: "#000", fontSize: 12 }]}>Colony Inspection </Text>
                            <Text style={[styles.text, { color: "#777", fontSize: 9 }]}>An hour ago</Text>

                        </View>
                        <TouchableOpacity><Text style={[styles.text, { color: "#000", fontSize: 12 }]}>#Hive_Id</Text></TouchableOpacity>


                    </View>
                
                    
                </ScrollView>
            </SafeAreaView>
        )

    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF',
       
    },
    text:{
        fontFamily:"Poppins-Regular",
        color:"#52575D"
    },
    image:{
        flex:1,
        width:undefined,
        height:undefined
    },
    titleBar:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:24,
        marginHorizontal:16
    },
    profileImage:{
        width:200,
        height:200,
        borderRadius:100,
        overflow:"hidden",
        elevation:15
        
    },
    add:{
        backgroundColor:"#ffd900",
        position:"absolute",
        bottom:16,
        right:0,
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: "center",
        justifyContent: "center",
        elevation: 15,
        shadowColor: "#ffd900",
    },
    infoContainer:{
        alignSelf:"center",
        alignItems:"center",
        marginTop:16
    },
    count:{
        backgroundColor:"#fff",
        marginTop:10,
        marginBottom:10,
        marginLeft:20,
        marginRight:10,
        width:180,
        height:180,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:12,
        elevation:5,
        borderWidth:2,
        borderColor:"#ffd900"
    
    

    },
    cardIcon:{
        backgroundColor: "#fff",   
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: "center",
        justifyContent: "center",
        elevation: 20,
        shadowColor: "#ffd900",
        
    },
    event:{
        margin: 12,
        height:750,
        alignItems: "center",
        justifyContent: "center",
        
        // elevation:2
        
    },
    recentItemContainer: { 
       alignItems:"center",
        backgroundColor:"#fff",
        margin:20,
        marginTop:0,
        elevation:5,
        borderRadius:12,
        justifyContent:"center",
        padding:10,
        borderWidth: 1,
        borderColor: "#ffd900"

        
        
        
    }
})