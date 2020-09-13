import React, { Component } from 'react'
import { Text, StyleSheet, View, PermissionsAndroid, Platform} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Polyline, } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {Marker} from 'react-native-maps'
import Geolocation from 'react-native-geolocation-service';
import {mapStyle} from '../styles/mapStyle.json'
import { Button, Input } from '../components';
import theme from '../styles/themes'
import Icon from 'react-native-vector-icons/FontAwesome5'
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
const items = [
    // this is the parent or 'item'
    {
        name: 'Fruits',
        id: 0,
        // these are the children or 'sub items'
        children: [
            {
                name: 'Apple',
                id: 10,
            },
            {
                name: 'Strawberry',
                id: 17,
            },
            {
                name: 'Pineapple',
                id: 13,
            },
            {
                name: 'Banana',
                id: 14,
            },
            {
                name: 'Watermelon',
                id: 15,
            },
            {
                name: 'Kiwi fruit',
                id: 16,
            },
        ],
    },

];
export default class FirstScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            coordinates: [],
            ApiaryName: '',
            ApiaryNumber: '',
            sunExposure: 4,
            sunExposures: ['SunLight', 'Shade', 'LowLight'],
            Landscape:4,
            Landscapes : ['City','Rural','Town'],
            selectedItems: [],

        };
    }
    onSelectedItemsChange = (selectedItems) => {
        this.setState({ selectedItems });
    };
    getMyLocation = () => {
        var that = this;
        //Checking for the permission just after component loaded
        if (Platform.OS === 'ios') {
            this.callLocation(that);
        } else {
            async function requestLocationPermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                        'title': 'Location Access Required',
                        'message': 'This App needs to Access your location'
                    }
                    )
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //To Check, If Permission is granted
                        that.callLocation(that);
                    } else {
                        alert("Permission Denied");
                    }
                } catch (err) {
                    // alert("err", err);
                    // console.warn(err)
                }
            }
            requestLocationPermission();
        }
    }
    callLocation(that) {
        //alert("callLocation Called");
        Geolocation.getCurrentPosition(
            position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    coordinates: this.state.coordinates.concat({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    })
                });
            },
            error => {
                Alert.alert(error.message.toString());
            },
            {
                showLocationDialog: true,
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 0
            }
        );
        
    }
    getMove = () => {
        Geolocation.clearWatch(this.Geolocation.watchPosition(
            position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    coordinates: this.state.coordinates.concat({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    })
                });
            },
            error => {
                console.log(error);
            },
            {
                showLocationDialog: true,
                enableHighAccuracy: true,
                timeout: 20000,
                maximumAge: 0,
                distanceFilter: 0
            }
        ));
    }

    getNewLatitude = () => {

    } 

    getNewLongitude = () => {

    }



    render() {
        const { navigation } = this.props;
        const isActiveButton = (value_1, value_2) => (value_1 == value_2 ? styles.radioBtnActive : styles.radioBtn)
        const isActiveIcon = (value_1, value_2) => (value_1 == value_2 ? styles.iconActive : styles.icon);
        const { selectedItems } = this.state
        return (

 
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.headerBar}>
                        <Text style={styles.headerTitle}> New Apiary</Text>
                    </View>
                    <View style={styles.mapContainer}>
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            showsUserLocation = {true}
                            focusable = {false}
                            style={styles.map}
                            region={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}>
                            <Marker
                                draggable
                                onPress ={()=>this.getMove()}
                                coordinate={{
                                    latitude: this.state.latitude,
                                    longitude: this.state.longitude,
                                }}>
                            </Marker>
                            <Polyline
                                coordinates={this.state.coordinates}
                                strokeColor="#bf8221"
                                strokeColors={['#bf8221', '#ffe066', '#ffe066', '#ffe066', '#ffe066',]}
                                strokeWidth={3}
                            />
                        </MapView>

                    </View>

                 <View style = {styles.buttonContainer}>
                        <Button
                            style={styles.Button}
                            gradient
                            shadow
                            onPress={() => this.getMyLocation()}
                        ><Text style = {styles.buttonText}>Get your Location</Text></Button>
                        
                        <View style={styles.lanLatContainer}>
                            <Text style={styles.buttonText}>Latitude : <Text style={styles.latitude}>{this.state.latitude}</Text> </Text>
                            <Text style={styles.buttonText}> <Text style={styles.latitude}>{this.state.longitude} </Text>: Longitude</Text>
                        </View>
                        

                 </View>
                <View style = {styles.dataContainer}>
                     <Input
                        style = {styles.input}
                        placeholder = "Apiary Name"
                        onChangeText = {text => this.setState({ApiaryName:text})}
                     />
                        <Input
                            style={styles.input}
                            placeholder="Apiary Number"
                            onChangeText={text => this.setState({ ApiaryNumber: text })}
                        />
                        <Text style={{alignSelf:"center",fontFamily:'Poppins-Regular',fontSize:20}}>Sun Exposure</Text>
                        <View style={styles.mainContainer}>
                            {
                                this.state.sunExposures.map((data, index) => {
                                    return (
                                        <View style={styles.radioButtons} key={index}>
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
                        <Text style={{ alignSelf: "center", fontFamily: 'Poppins-Regular', fontSize: 20 }}>Landscape</Text>
                        <View style={styles.mainContainer}>
                            {
                                this.state.Landscapes.map((data, index) => {
                                    return (
                                        <View style={styles.radioButtons} key={index}>
                                            <TouchableOpacity activeOpacity={1} onPress={() => this.setState({ Landscape: index })}>
                                                <View style={[isActiveButton(this.state.Landscapes[this.state.Landscape], data)]}>

                                                    <Icon name="sun" style={[isActiveIcon(this.state.Landscapes[this.state.Landscapes], data)]} size={40} />
                                                </View>
                                            </TouchableOpacity>


                                        </View>
                                    )



                                })
                            }
                        </View>

                        <SectionedMultiSelect
                            items={items}
                            uniqueKey="id"
                            subKey="children"
                            selectText="Flora Type..."
                            fontFamily = 'Poppins-Regular'
                            showDropDowns={true}
                            readOnlyHeadings={true}
                            onSelectedItemsChange={this.onSelectedItemsChange}
                            selectedItems={this.state.selectedItems}
                            modalAnimationType="fade"
                            
                            
                        />
                        

                            <Button
                                style={styles.Button}
                                gradient
                                shadow
                                onPress={() => navigation.navigate("TabNavigation")}
                            ><Text style={styles.buttonText}>Create</Text></Button>
                        </View>
                </View>
                
                
                
            </ScrollView>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    headerBar:{
        alignItems:"center",
        margin:20,

    },
    headerTitle:{
        fontFamily:"Poppins-Black"
    }, 
    buttonText:{
       alignSelf:"center",
    fontFamily: "Poppins-Black"
    },
    buttonContainer:{
        margin: 20,
    },
    dataContainer:{
        marginTop:0,
        margin :20 
    },
    lanLatContainer:{
        flexDirection:"row",
        justifyContent : "space-between",
        
    }, latitude: {
        fontFamily:"Poppins-Medium"
    },
    input: {
        fontFamily:'Poppins-Regular',
        borderRadius: 0,
        borderWidth: 0,
        borderBottomColor: theme.colors.black,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        elevation: 40,
        shadowColor: "#222"
        
    },
    mapContainer:{
        // ...StyleSheet.absoluteFillObject,
        marginLeft:20,
        marginRight:20,
        height: 300,
        justifyContent: 'flex-end',
        alignItems: 'center',
        

    }, mainContainer: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    },
    radioButtons: {




    },
    radioBtn: {
        margin: 25,
        width: 70,
        height: 70,
        borderColor: "#bdbdbd",
        borderRadius: 35,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,

        borderStyle: "solid",
        borderWidth: 2


    },
    icon: {
        color: "#bdbdbd"
    },
    iconActive: {
        color: "#1211ff"
    },
    radioBtnActive: {
        margin: 25,
        width: 80,
        height: 80,
        borderColor: "#1211ff",
        borderRadius: 40,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        elevation: 5,

        borderStyle: "solid",
        borderWidth: 2




    }




})
