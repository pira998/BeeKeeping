import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image,Modal} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native';
import { TouchableNativeFeedback } from 'react-native'
import {Divider} from '../components'
import {Block,Button} from '../components'
import theme from '../styles/themes'

export default class HiveScreen extends Component {

    // state = {
    //     showStandard: false,
    // }
    
    // renderStandard() {
    //     return (
    //         <Modal animationType="fade" visible={this.state.showStandard}>
    //             <View></View>
    //             <Button gradient onPress={() => this.setState({ showStandard: false })}>
    //                 <Text center white>I Understand</Text>
    //             </Button>
    //         </Modal>
    //     )
    // }


    goToStandardInspection() {
        const { navigation } = this.props
        navigation.navigate("StandardInspection")
    }

    goToTasks() {
        const { navigation } = this.props
        navigation.navigate('Tasks')
    }
    goToWeather() {
        const { navigation } = this.props
        navigation.navigate('Weather')
    }
    goToEditApiary() {
        const { navigation } = this.props
        navigation.navigate('EditApiary')
    }
    goToApiaries() {
        const { navigation } = this.props
        navigation.navigate('Apiaries')
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.titleBar}>
                        <Ionicons name='chevron-back' size={24} color="#007AFF" onPress={() => this.goToApiaries()}></Ionicons>
                        <MaterialIcons name='more-vert' size={24} color="#007AFF" onPress={() => this.goToEditApiary()}></MaterialIcons>

                    </View>
                    <View style={{ alignSelf: "center", height: 108, }}>
                        <View style={styles.profileImage}>
                            <Image source={require('../resources/images/apiaries.jpeg')} style={styles.image} resizeMode="cover" />
                        </View>
                        <View style={styles.add}>
                            <Ionicons name="add" size={24} color="#FFF" onPress={() => alert("Edit Photo")} />
                        </View>

                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={[styles.text, { fontWeight: "100", fontSize: 20 }]}>Jaffna_hive</Text>
                        <Text style={[styles.text, { fontWeight: "100", fontSize: 15, color: "#C5CCD6" }]}>#0001</Text>
                    </View>
                    <Divider />
                        <View style= {styles.dateContainer}>
                        <FontAwesome name="image" size={24} color="#fff" style={{ margin:  20 }} onPress={() => alert("Edit Photo")} />

                        <View style={{ alignItems: "center" }}>
                            <Text style={styles.date}>08/28/2020</Text>
                            <Text style={styles.day}>Today</Text>
                            </View>

                        <FontAwesome name="calendar" size={24} color="#777" style={{ margin:  20 }} onPress={() => alert("Edit Photo")} />
                        </View>
                    <Divider />
                    <View style={styles.dateContainer}>
                        <FontAwesome name="image" size={24} color="#fff" style={{ margin: 20 }} onPress={() => alert("Edit Photo")} />

                        <View style={{alignItems:"center"}}>
                                <Text style={styles.date}>08/28/2020</Text>
                                <Text style={styles.day}>Next Inspections</Text>
                        </View>
                            
                        <FontAwesome name="calendar" size={24} color="#fff" style={{ margin: 10 }} onPress={() => alert("Edit Photo")} />
                        </View>
                        
                    <Divider/>
                    <View style={{ alignItems: "center" }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity onPress={()=>this.goToStandardInspection()} activeOpacity={1}>
                                <View style={[styles.count, { alignSelf: "center" }]} >
                                    <View style={styles.cardIcon} flexDirection="row">
                                        <Image source={require('../resources/icons/bee-color.png')} style={{ height: 50, width: 50 }}/>
                                    </View>
                                    {/* <Text style={[styles.text, { fontSize: 50, color: "#DFD8C8" }]}>990</Text> */}
                                    <Text style={[styles.text, { fontSize: 20, color: "#DFD8C8", textTransform: "uppercase" }]}>Standard</Text>
                                </View>
                            </TouchableOpacity>
                            {/* {this.renderStandard()} */}
                            <TouchableOpacity onPress={() => this.goToHive()} activeOpacity={1}>
                                <View style={[styles.count, { alignSelf: "center" }]} >
                                    <View style={styles.cardIcon} flexDirection="row">
                                        <Image source={require('../resources/icons/bee-color.png')} style={{ height: 50, width: 50 }} />
                                    </View>
                                    {/* <Text style={[styles.text, { fontSize: 50, color: "#DFD8C8" }]}>990</Text> */}
                                    <Text style={[styles.text, { fontSize: 20, color: "#DFD8C8", textTransform: "uppercase" }]}>Queen</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.goToHive()} activeOpacity={1}>
                                <View style={[styles.count, { alignSelf: "center" }]} >
                                    <View style={styles.cardIcon} flexDirection="row">
                                        <Image source={require('../resources/icons/bee-color.png')} style={{ height: 50, width: 50 }} />
                                    </View>
                                    {/* <Text style={[styles.text, { fontSize: 50, color: "#DFD8C8" }]}>990</Text> */}
                                    <Text style={[styles.text, { fontSize: 20, color: "#DFD8C8", textTransform: "uppercase" }]}>Feed</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.goToHive()} activeOpacity={1}>
                                <View style={[styles.count, { alignSelf: "center" }]} >
                                    <View style={styles.cardIcon} flexDirection="row">
                                        <Image source={require('../resources/icons/bee-color.png')} style={{ height: 50, width: 50 }} />
                                    </View>
                                    {/* <Text style={[styles.text, { fontSize: 50, color: "#DFD8C8" }]}>990</Text> */}
                                    <Text style={[styles.text, { fontSize: 20, color: "#DFD8C8", textTransform: "uppercase" }]}>Harvest</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.goToHive()} activeOpacity={1}>
                                <View style={[styles.count, { alignSelf: "center" }]} >
                                    <View style={styles.cardIcon} flexDirection="row">
                                        <Image source={require('../resources/icons/bee-color.png')} style={{ height: 50, width: 50 }} />
                                    </View>
                                    {/* <Text style={[styles.text, { fontSize: 50, color: "#DFD8C8" }]}>990</Text> */}
                                    <Text style={[styles.text, { fontSize: 20, color: "#DFD8C8", textTransform: "uppercase" }]}>Treatment</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.goToHive()} activeOpacity={1}>
                                <View style={[styles.count, { alignSelf: "center" }]} >
                                    <View style={styles.cardIcon} flexDirection="row">
                                        <Image source={require('../resources/icons/bee-color.png')} style={{ height: 50, width: 50 }} />
                                    </View>
                                    {/* <Text style={[styles.text, { fontSize: 50, color: "#DFD8C8" }]}>990</Text> */}
                                    <Text style={[styles.text, { fontSize: 20, color: "#DFD8C8", textTransform: "uppercase" }]}>Online</Text>
                                </View>
                            </TouchableOpacity>

                            {/* <TouchableOpacity onPress={() => this.goToTasks()} activeOpacity={1}>
                                <View style={[styles.count, { alignSelf: "center" }]} >
                                    <View style={styles.cardIcon} flexDirection="row">
                                        <Image source={require('../resources/icons/bee-black.png')} style={{ height: 50, width: 50 }} />
                                    </View>
                                    <Text style={[styles.text, { fontSize: 50, color: "#DFD8C8" }]}>199</Text>
                                    <Text style={[styles.text, { fontSize: 20, color: "#DFD8C8", textTransform: "uppercase" }]}>Feeding</Text>
                                </View>


                            </TouchableOpacity> */}


                        </ScrollView>
                    </View>
                    <Text style={{ fontFamily: "Poppins-Regular", marginLeft: 20, color: "#777" }}>Recent Activities</Text>

                    <View style={[styles.recentItemContainer, { padding: 15 }]}>


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
    container: {
        flex: 1,
        backgroundColor: '#FFF',

    },
    text: {
        fontFamily: "Poppins-Regular",
        color: "#000",
        
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
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: "hidden",
        elevation: 15

    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 16,
        right: 0,
        width: 30,
        height: 30,
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
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        width: 180,
        height: 180,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        elevation: 5,



    },
    cardIcon: {
        backgroundColor: "#fff",
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        alignItems: "center",
        justifyContent: "center",
        elevation: 20,
        shadowColor: "#777",
        borderColor:"#ff2d55",
        borderWidth:2,
        marginBottom:15



    },
    event: {
        margin: 12,
        height: 750,
        alignItems: "center",
        justifyContent: "center",

        // elevation:2

    },
    recentItemContainer: {
        alignItems: "flex-start",
        backgroundColor: "#fff",
        margin: 20,
        marginTop: 0,
        elevation: 5,
        borderRadius: 12,
    },date:{
        fontFamily:"Poppins-Medium",
        marginTop:10,
        color:"#000"
    },
    day:{
        fontFamily: "Poppins-Regular",
        marginBottom: 10,
        color: "#777"
    },
    dateContainer:{
        justifyContent:"space-between",
        flexDirection:"row",

    }
})