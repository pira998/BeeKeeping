import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,Modal,TouchableHighlight } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class StandardInspectionScreen extends Component {

    state = {
        modalVisible: false,
        population:"Population",
        mood:"mood",
        fitness:"Fitness",
        hiveBodies:"Hive Bodies",
        frames:"Frame",
        broodPattern:"Brood Pattern",
        problems:"Problems",
        hivemodification:"Hive Modification"
    };
    setPopulation = (population) =>{
        this.setState({population:population})
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    renderPopulation() {
        const { modalVisible } = this.state;
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>
                            <View style={styles.optionContainer}>
                                <View style={styles.optionBar}>
                                    <TouchableHighlight

                                        onPress={() => {
                                            this.setPopulation("Low");
                                            this.setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <View style={styles.row}>
                                            <View style={styles.option}>
                                                <Image source={require('../../resources/icons/bee-black.png')} style={{ height: 50, width: 50, alignSelf: "center" }} />
                                            </View>
                                            <Text style={styles.optionTitle}> Low </Text>
                                        </View>
                                    </TouchableHighlight>

                                    <View style={styles.row}>
                                        <View style={styles.option}>
                                            <Image source={require('../../resources/icons/bee-black.png')} style={{ height: 50, width: 50, alignSelf: "center" }} />
                                        </View>
                                        <Text style={styles.optionTitle}> Low-Medium </Text>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.option}>
                                            <Image source={require('../../resources/icons/bee-black.png')} style={{ height: 50, width: 50, alignSelf: "center" }} />
                                        </View>
                                        <Text style={styles.optionTitle}> Medium </Text>
                                    </View>

                                </View>
                                <View style={styles.optionBar}>
                                    <View style={styles.row}>
                                        <View style={styles.option}>
                                            <Image source={require('../../resources/icons/bee-black.png')} style={{ height: 50, width: 50, alignSelf: "center" }} />
                                        </View>
                                        <Text style={styles.optionTitle}> Medium-Full </Text>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.option}>
                                            <Image source={require('../../resources/icons/bee-black.png')} style={{ height: 50, width: 50, alignSelf: "center" }} />
                                        </View>
                                        <Text style={styles.optionTitle}> Full </Text>
                                    </View>
                                    

                                </View>
                                
                            </View>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                    this.setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

               
            </View>
        );
    }




    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerBar}>
                    <View style={styles.titleBar}>
                        <View style={styles.camera}>
                            <Image source={require('../../resources/icons/bee-black.png')} style={{ height: 30, width: 30, alignSelf: "center" }} />

                        </View>
                        <View>
                            <View style={styles.title}>
                                <Image source={require('../../resources/icons/bee-color.png')} style={{ height: 50, width: 50, alignSelf: "center" }} />
                            </View>
                            <Text style={styles.headerTitle}> Standard </Text>
                        </View>

                        <View style={styles.note}>
                            <Image source={require('../../resources/icons/bee-black.png')} style={{ height: 30, width: 30, alignSelf: "center" }} />
                        </View>
                    </View>

                </View>
                <View style={styles.optionContainer}>
                    <View style={styles.optionBar}>
                        <TouchableHighlight
                            
                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        >
                            <View style={styles.row}>
                                <View style={styles.option}>
                                    <Image source={require('../../resources/icons/bee-black.png')} style={{ height: 50, width: 50, alignSelf: "center" }} />
                                </View>
                                <Text style={styles.optionTitle}> {this.state.population} </Text>
                            </View>
                        </TouchableHighlight>
                   
                        <TouchableHighlight

                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        >
                            <View style={styles.row}>
                                <View style={styles.option}>
                                    <Image source={require('../../resources/icons/bee-black.png')} style={{ height: 50, width: 50, alignSelf: "center" }} />
                                </View>
                                <Text style={styles.optionTitle}> Mood </Text>
                            </View>
                        </TouchableHighlight>        
                        <TouchableHighlight

                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        >
                            <View style={styles.row}>
                                <View style={styles.option}>
                                    <Image source={require('../../resources/icons/bee-black.png')} style={{ height: 50, width: 50, alignSelf: "center" }} />
                                </View>
                                <Text style={styles.optionTitle}> Standard </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.optionBar}>
                        <TouchableHighlight

                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        >
                            <View style={styles.row}>
                                <View style={styles.option}>
                                    <Image source={require('../../resources/icons/bee-black.png')} style={{ height: 50, width: 50, alignSelf: "center" }} />
                                </View>
                                <Text style={styles.optionTitle}> Standard </Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight

                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        >
                            <View style={styles.row}>
                                <View style={styles.option}>
                                    <Image source={require('../../resources/icons/bee-black.png')} style={{ height: 50, width: 50, alignSelf: "center" }} />
                                </View>
                                <Text style={styles.optionTitle}> Standard </Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight

                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        >
                            <View style={styles.row}>
                                <View style={styles.option}>
                                    <Image source={require('../../resources/icons/bee-black.png')} style={{ height: 50, width: 50, alignSelf: "center" }} />
                                </View>
                                <Text style={styles.optionTitle}> Standard </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.optionBar}>
                        <TouchableHighlight

                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        >
                            <View style={styles.row}>
                                <View style={styles.option}>
                                    <Image source={require('../../resources/icons/bee-black.png')} style={{ height: 50, width: 50, alignSelf: "center" }} />
                                </View>
                                <Text style={styles.optionTitle}> Standard </Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight

                            onPress={() => {
                                this.setModalVisible(true);
                            }}
                        >
                            <View style={styles.row}>
                                <View style={styles.option}>
                                    <Image source={require('../../resources/icons/bee-black.png')} style={{ height: 50, width: 50, alignSelf: "center" }} />
                                </View>
                                <Text style={styles.optionTitle}> Standard </Text>
                            </View>
                        </TouchableHighlight>
                     
                    </View>


                    {this.renderPopulation()}
                </View>
                <View style={styles.footerBar}>
                    {/* <View style={styles.titleBar}> */}
              
                        <View>
                            <View style={styles.okay}>
                                <Image source={require('../../resources/icons/bee-color.png')} style={{ height: 50, width: 50, alignSelf: "center" }} />
                            </View>
                        
                        </View>
                        <View>
                            <View style={styles.close}>
                                <Image source={require('../../resources/icons/bee-color.png')} style={{ height: 50, width: 50, alignSelf: "center" }} />
                            </View>
                           
                        </View>
                
                    {/* </View> */}

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // alignItems: "center",
        backgroundColor: "#fff",
        flex:1,
    },
    headerBar:{
        backgroundColor:"#fff",
        // height:100,
        elevation:10,
        shadowColor:"#777",
        
    },
    optionBar:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-evenly",

    },
    footerBar:{
        flex:1,
        backgroundColor: "#fff",
        elevation: 10,
        shadowColor: "#777",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row"
    },
    navigationBar:{
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop: 24,
        
    },
    titleBar: {
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        
    },camera:{
        backgroundColor: "#fff",
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        alignItems: "center",
        justifyContent: "center",
        elevation: 20,
        margin: 15,
        marginTop: 30,
    },
    title:{
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: 80,
        backgroundColor: "#fff",
        borderRadius: 80/2,
        elevation: 20,
        margin: 15,
        marginTop: 30,
  
    },
    note:{
        backgroundColor:"#fff",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: 50,
        margin: 15,
        borderRadius: 25,
        elevation: 20,
        marginTop: 30,
    },
    headerTitle:{
        fontFamily:"Poppins-Regular",
        fontSize:20
    },
    option:{
        margin:20,
        marginBottom:0,
    },
    optionTitle:{
        fontFamily: "Poppins-Medium",
        fontSize: 15,
        
    }
    ,optionContainer:{
        margin:20,
        
    },
    row:{
        alignItems: "center",
        justifyContent: "center"
    },
    okay:{
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: 80,
        backgroundColor: "#fff",
        borderRadius: 80 / 2,
        elevation: 20,
        margin: 20
    },
    close:{
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: 80,
        backgroundColor: "#fff",
        borderRadius: 80 / 2,
        elevation: 20,
        margin:20 
    }, centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

})
