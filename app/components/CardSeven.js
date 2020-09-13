import React, { Component } from "react";
import {
    Text,
    View,
    Image,
    Dimensions,
    Platform,
    ProgressViewIOS,
    ProgressBarAndroid,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from "react-native";
import propTypes from 'prop-types'
import { scale, verticalScale, moderateScale } from "react-native-size-matters";


import Icon from "react-native-vector-icons/FontAwesome";

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;


class CardSeven extends Component{
    static defaultProps = {

    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View
                style={{
                    backgroundColor: "#fff",
                    margin: scale(10),
                    flexDirection: "row",
                    width: screenWidth - scale(20),
                    shadowColor: "#777",
                    borderRadius: 12,
                    elevation: 5.6,
                    shadowOpacity: 0.2,
                    shadowRadius: 2,
                    shadowOffset: {
                        height: 1,
                        width: 0
                    },
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1
                }}
            >
                <View
                    style={{
                        backgroundColor: "transparent",
                        height: verticalScale(130),
                        justifyContent: "center",
                        alignItems: "center",
                        width: scale(130),
                        flex: 2
                    }}
                >
                    <Image
                        source={this.props.image}
                        style={{
                            height: verticalScale(120),
                            width: scale(120),
                            resizeMode: "cover",
                            borderRadius:12
                        }}
                    />
                </View>

                <View
                    style={{
                        flex: 3,
                        height: scale(150),
                        padding: scale(5),
                        marginTop: 0
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",

                            flex: 1
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: "transparent",
                                flex: 3,
                                justifyContent: "center"
                            }}
                        >
                            <Text
                                style={{ color: "#000", margin: scale(3), fontSize: scale(17) }}
                            >
                                {this.props.title}
                            </Text>
                            <Text
                                style={{
                                    color: "#888",
                                    textAlign: "justify",
                                    margin: scale(3),
                                    fontSize: scale(12)
                                }}
                            >
                                {
                                    "The essence of minimalism is to eliminate the excess vanity to reveal the original characteristics of the home, from a simple…"
                                }
                            </Text>
                            <View
                                style={{
                                    flexDirection: "row",
                                    zIndex: scale(4),
                                    flex: 1,
                                    marginTop: -0,
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start"
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => this.props.onClicked1()}
                                    style={[
                                        {
                                            justifyContent: "center",
                                            zIndex: 3,
                                            alignItems: "center",
                                            alignSelf: "flex-end",
                                            width: scale(30),
                                            height: scale(30),
                                            margin: 10,
                                            shadowRadius: 5,
                                            borderRadius: scale(15),
                                            backgroundColor: this.props.iconBackground1
                                        }
                                    ]}
                                >
                                    <Icon
                                        name={this.props.icon1}
                                        color={this.props.iconColor1}
                                        size={scale(15)}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.props.onClicked2()}
                                    style={[
                                        {
                                            justifyContent: "center",
                                            zIndex: 3,
                                            alignItems: "center",
                                            alignSelf: "flex-end",
                                            width: scale(30),
                                            height: scale(30),
                                            margin: 10,
                                            shadowRadius: 5,
                                            borderRadius: scale(15),
                                            backgroundColor: this.props.iconBackground2
                                        }
                                    ]}
                                >
                                    <Icon
                                        name={this.props.icon2}
                                        color={this.props.iconColor2}
                                        size={scale(15)}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}


CardSeven.propTypes = {
    title: propTypes.string.isRequired,
    subTitle: propTypes.string.isRequired,
    image: propTypes.oneOfType([propTypes.number, propTypes.object]).isRequired,
    icon1: propTypes.string.isRequired,
    iconColor1: propTypes.string.isRequired,
    iconBackground1: propTypes.string.isRequired,
    onClicked1: propTypes.func.isRequired,
    icon2: propTypes.string.isRequired,
    iconColor2: propTypes.string.isRequired,
    iconBackground2: propTypes.string.isRequired,
    onClicked2: propTypes.func.isRequired
};


export default CardSeven;