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
                        <Ionicons name='chevron-back' size={24} color="#007AFF"></Ionicons>
                        <MaterialIcons name='more-vert' size={24} color="#007AFF"></MaterialIcons>

                    </View>
                    <View style={{alignSelf:"center",height:216,}}>
                        <View style={styles.profileImage}>
                            <Image source={require('../resources/images/apiaries.jpeg')} style={styles.image} resizeMode="cover"/>
                        </View>
                        <View style= {styles.add}>   
                                <Ionicons name="add" size={48} color="#FFF" style={{ marginLeft: 3 }} onPress={() => alert("Edit Photo")}/>
                        </View>
                
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={[styles.text, { fontWeight: "100", fontSize: 25 }]}>Jaffna_Apiary</Text>
                        <Text style={[styles.text, { fontWeight: "100", fontSize: 15, color:"#C5CCD6" }]}>#2321</Text>
                    </View>
                    <View style = {{alignItems:"center"}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={[styles.count, { alignSelf: "center"}]} >
                                    <View style={styles.cardIcon} flexDirection="row">
                                    <Octicons name="archive" size={36} color="#41444B" onPress={() => alert("Edit Photo")} />
                                    </View>
                                    <Text style={[styles.text, { fontSize: 50, color: "#DFD8C8" }]}>990</Text>
                                <Text style={[styles.text, { fontSize: 20, color: "#DFD8C8", textTransform: "uppercase" }]}>Hives</Text>
                            </View>
                            <View style={[styles.count, { alignSelf: "center" }]} >
                                <View style={styles.cardIcon} flexDirection="row">
                                    <Octicons name="archive" size={36} color="#41444B" onPress={() => alert("Edit Photo")} />
                                </View>
                                <Text style={[styles.text, { fontSize: 50, color: "#DFD8C8" }]}>199</Text>
                                <Text style={[styles.text, { fontSize: 20, color: "#DFD8C8", textTransform: "uppercase" }]}>Tasks</Text>
                            </View>
                            <View style={[styles.count, { alignSelf: "center" }]} >
                                <View style={styles.cardIcon} flexDirection="row">
                                    <Octicons name="archive" size={36} color="#41444B" onPress={() => alert("Edit Photo")} />
                                </View>
                                <Text style={[styles.text, { fontSize: 50, color: "#DFD8C8" }]}>290</Text>
                                <Text style={[styles.text, { fontSize: 20, color: "#DFD8C8", textTransform: "uppercase" }]}>Weather</Text>
                            </View>
                            <View style={[styles.count, { alignSelf: "center" }]} >
                                <View style={styles.cardIcon} flexDirection="row">
                                    <Octicons name="archive" size={36} color="#41444B" onPress={() => alert("Edit Photo")} />
                                </View>
                                <Text style={[styles.text, { fontSize: 50, color: "#DFD8C8" }]}>390</Text>
                                <Text style={[styles.text, { fontSize: 20, color: "#DFD8C8", textTransform: "uppercase" }]}>Strength</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <Text style={{ fontFamily: "Poppins-Regular",marginLeft:20,color:"#777" }}>Recent Activities</Text>

                      <View style={[styles.recentItemContainer,{padding:15}]}>

                        
                            <Text style={styles.text}>hi i am good programmer. I can do many things but i have bad habits. That is a hardWork. </Text>
                            <Text style={styles.text}>hi i am good programmer. I can do many things but i have bad habits. That is a hardWork. </Text>
                            <Text style={styles.text}>hi i am good programmer. I can do many things but i have bad habits. That is a hardWork. </Text>
                        <Text style={styles.text}>hi i am good programmer. I can do many things but i have bad habits. That is a hardWork. </Text>
                        <Text style={styles.text}>hi i am good programmer. I can do many things but i have bad habits. That is a hardWork. </Text>
                        <Text style={styles.text}>hi i am good programmer. I can do many things but i have bad habits. That is a hardWork. </Text>

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
        backgroundColor:"#41444B",
        position:"absolute",
        bottom:16,
        right:0,
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: "center",
        justifyContent: "center",
        elevation: 15,
        shadowColor: "#777",
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
    
    

    },
    cardIcon:{
        backgroundColor: "#fff",   
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: "center",
        justifyContent: "center",
        elevation: 20,
        shadowColor: "#777",
        
    },
    event:{
        margin: 12,
        height:750,
        alignItems: "center",
        justifyContent: "center",
        
        // elevation:2
        
    },
    recentItemContainer: { 
        alignItems:"flex-start",
        backgroundColor:"#fff",
        margin:20,
        marginTop:0,
        elevation:5,
        borderRadius:12,
    }
})