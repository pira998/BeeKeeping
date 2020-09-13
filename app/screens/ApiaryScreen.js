import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import { TouchableOpacity } from 'react-native';
import {TouchableNativeFeedback} from 'react-native'
// import {Block} from '../components'


export default class ApiaryScreen extends Component {

    goToHive(){
        const {navigation} = this.props
        navigation.navigate("Hives")
    }

    goToTasks(){
        const {navigation} = this.props
        navigation.navigate('Tasks')
    }
    goToWeather(){
        const {navigation} = this.props
        navigation.navigate('Weather')
    }
    goToEditApiary(){
        const {navigation} = this.props
        navigation.navigate('EditApiary')
    }
    goToApiaries(){
        const{navigation} = this.props
        navigation.navigate('Apiaries')
    }

    render() {
     
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.titleBar}>
                        <Ionicons name='chevron-back' size={24} color="#000" onPress={()=>this.goToApiaries()}></Ionicons>
                        <MaterialIcons name='more-vert' size={24} color="#000" onPress={()=>this.goToEditApiary()}></MaterialIcons>

                    </View>
                    <View style={{ alignSelf: "center", height: 216, }}>
                        <View style={styles.profileImage}>
                            <Image source={require('../resources/images/apiaries.jpeg')} style={styles.image} resizeMode="cover" />
                        </View>
                        <View style={styles.add}>
                            <Ionicons name="add" size={48} color="#FFF" style={{ marginLeft: 3 }} onPress={() => alert("Edit Photo")} />
                        </View>

                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={[styles.text, { fontWeight: "100", fontSize: 25 }]}>Jaffna_Apiary</Text>
                        <Text style={[styles.text, { fontWeight: "100", fontSize: 15, color: "#C5CCD6" }]}>#2321</Text>
                    </View>
                    <View style={{alignItems:"center"}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={()=>this.goToHive()} activeOpacity={1}>
                                <View style={[styles.count, { alignSelf: "center" }]} >
                                    <View style={styles.cardIcon} flexDirection="row">
                                        <Octicons name="archive" size={36} color="#000" onPress={() => alert("Edit Photo")} />
                                    </View>
                                    <Text style={[styles.text, { fontSize: 50, color: "#000" }]}>990</Text>
                                    <Text style={[styles.text, { fontSize: 20, color: "#000", textTransform: "uppercase" }]}>Hives</Text>
                                </View>
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={()=>this.goToTasks()} activeOpacity={1}>
                                <View style={[styles.count, { alignSelf: "center" }]} >
                                    <View style={styles.cardIcon} flexDirection="row">
                                        <Octicons name="archive" size={36} color="#000" onPress={() => alert("Edit Photo")} />
                                    </View>
                                    <Text style={[styles.text, { fontSize: 50, color: "#000" }]}>199</Text>
                                    <Text style={[styles.text, { fontSize: 20, color: "#000", textTransform: "uppercase" }]}>Tasks</Text>
                                </View>


                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={1} onPress={()=>this.goToWeather()}>
                                <View style={[styles.count, { alignSelf: "center" }]} >
                                    <View style={styles.cardIcon} flexDirection="row">
                                        <Octicons name="archive" size={36} color="#41444B" onPress={() => alert("Edit Photo")} />
                                    </View>
                                    <Text style={[styles.text, { fontSize: 50, color: "#000" }]}>290</Text>
                                    <Text style={[styles.text, { fontSize: 20, color: "#000", textTransform: "uppercase" }]}>Weather</Text>
                                </View>

                            </TouchableOpacity>
                            
                            <TouchableOpacity activeOpacity={1}>
                                <View style={[styles.count, { alignSelf: "center" }]} >
                                    <View style={styles.cardIcon} flexDirection="row">
                                        <Octicons name="archive" size={36} color="#41444B" onPress={() => alert("Edit Photo")} />
                                    </View>
                                    <Text style={[styles.text, { fontSize: 50, color: "#000" }]}>390</Text>
                                    <Text style={[styles.text, { fontSize: 20, color: "#000", textTransform: "uppercase" }]}>Strength</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={1}>
                                <View style={[styles.count, { alignSelf: "center" }]} >
                                    <View style={styles.cardIcon} flexDirection="row">
                                        <Octicons name="archive" size={36} color="#41444B" onPress={() => alert("Edit Photo")} />
                                    </View>
                                    <Text style={[styles.text, { fontSize: 50, color: "#000" }]}>290</Text>
                                    <Text style={[styles.text, { fontSize: 20, color: "#000", textTransform: "uppercase" }]}>Feeding</Text>
                                </View>
                            </TouchableOpacity>
                            
                        </ScrollView>
                    </View>
                    <Text style={{ fontFamily: "Poppins-Regular", margin: 20, color: "#777" }}>Recent Activities</Text>


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
    container: {
        flex: 1,
        backgroundColor: '#FFF',

    },
    text: {
        fontFamily: "Poppins-Regular",
        color: "#52575D"
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden",
        elevation: 15

    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 16,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: "center",
        justifyContent: "center",
        elevation: 15,
        shadowColor: "#777",
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    count: {
        backgroundColor: "#fff",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 10,
        width: 180,
        height: 180,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        elevation: 5,
        borderWidth: 2,
        borderColor: "#ffd900"



    },
    cardIcon: {
        backgroundColor: "#fff",
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: "center",
        justifyContent: "center",
        elevation: 20,
        shadowColor: "#ffd900",

    },
    event: {
        margin: 12,
        height: 750,
        alignItems: "center",
        justifyContent: "center",

        // elevation:2

    },
    recentItemContainer: {
        alignItems: "center",
        backgroundColor: "#fff",
        margin: 20,
        marginTop: 0,
        elevation: 5,
        borderRadius: 12,
        justifyContent: "center",
        padding: 10,
        borderWidth: 1,
        borderColor: "#ffd900"




    }
})