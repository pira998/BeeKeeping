import React from "react";
import { View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import {mapStyle} from '../styles/mapStyle.json'
import Geolocation from "react-native-geolocation-service";

export default class SecondScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            coordinates: [],
        };
    }
    componentDidMount(){
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

    render() {

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    provider = {PROVIDER_GOOGLE}

                    region={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}>
                        <Marker 
                            coordinate={{
                                latitude : this.state.latitude,
                                longitude:this.state.longitude,
                                }}
                            title = "Your location"
                        >


                        </Marker>

                    </MapView>
            </View>
        );
    }
}