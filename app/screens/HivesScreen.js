import React, { Component,useState } from 'react'
import { Text, StyleSheet, View, SafeAreaView, ScrollView, Keyboard, Dimensions,Image,TouchableOpacity } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import {Searchbar,Modal} from 'react-native-paper'
import {FloatingButton, Block} from '../components'
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

// import SearchBar from 'react-native-search-bar';

const items = ['Apples', 'Pie', 'Juice', 'Cake', 'Nuggets'];

let screenWidth = Dimensions.get("window").width


const HivesScreen = ({navigation}) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [visible, setVisible] = React.useState(false);

    

    const hideModal = () => setVisible(false);

    const ModelView = () => {
       
    }
    
    const onChangeSearch = query => setSearchQuery(query);
    
        return (
                <Block>

                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        <View style={styles.titleBar}>
                            <Ionicons name='chevron-back' size={24} color="#007AFF" onPress={() => navigation.navigate("Apiaries")}></Ionicons>
                            <Text style={styles.headerText}>Hives</Text>
                            <MaterialIcons name='more-vert' size={24} color="#007AFF"></MaterialIcons>
                        </View>




                        <View style={styles.search}>

                            <Searchbar
                                placeholder="Search"
                                onChangeText={onChangeSearch}
                                value={searchQuery}

                            />
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate("Hive")}>
                            <View style={styles.hive} >
                                <View
                                    style={{
                                        backgroundColor: "transparent",
                                        height: verticalScale(90),
                                        // justifyContent: "center",
                                        alignItems: "center",
                                        width: scale(60),
                                        flex: 2,
                                        flexDirection: "row"
                                    }}
                                >
                                    <Image
                                        source={require("../resources/images/apiaries.jpeg")}
                                        style={{
                                            height: verticalScale(60),
                                            width: scale(60),
                                            resizeMode: "cover",
                                            borderRadius: 10,
                                            marginRight: 20,
                                            marginLeft: 20,


                                        }}
                                    />
                                    <View>
                                        <Text style={styles.hiveDetails}>
                                            Hi
                                    </Text>

                                        <Text style={styles.hiveLastSeen}>
                                            Last hive log :
                                    </Text>
                                    </View>

                                </View>

                                <View style={{ marginRight: 30 }}>
                                    <Text style={{ fontFamily: "Poppins-Bold", color: "#007AFF" }} onPress={() => navigation.navigate("Hive")}>Manage</Text>
                                </View>

                            </View>
                        </TouchableOpacity>
                       
                        <View style={styles.hive}>
                            <View
                                style={{
                                    backgroundColor: "transparent",
                                    height: verticalScale(90),
                                    // justifyContent: "center",
                                    alignItems: "center",
                                    width: scale(60),
                                    flex: 2,
                                    flexDirection: "row"
                                }}
                            >
                                <Image
                                    source={require("../resources/images/apiaries.jpeg")}
                                    style={{
                                        height: verticalScale(60),
                                        width: scale(60),
                                        resizeMode: "cover",
                                        borderRadius: 10,
                                        marginRight: 20,
                                        marginLeft: 20,


                                    }}
                                />
                                <View>
                                    <Text style={styles.hiveDetails}>
                                        Hi
                                    </Text>

                                    <Text style={styles.hiveLastSeen}>
                                        Next Inspec : sat 09/28/200
                                    </Text>
                                </View>

                            </View>

                            <View style={{ marginRight: 30 }}>
                                <Text style={{ fontFamily: "Poppins-Bold", color: "#007AFF" }} onPress={() => navigation.navigate("Hive")}>Manage</Text>
                            </View>

                        </View>
                        <View style={styles.hive}>
                            <View
                                style={{
                                    backgroundColor: "transparent",
                                    height: verticalScale(90),
                                    // justifyContent: "center",
                                    alignItems: "center",
                                    width: scale(60),
                                    flex: 2,
                                    flexDirection: "row"
                                }}
                            >
                                <Image
                                    source={require("../resources/images/apiaries.jpeg")}
                                    style={{
                                        height: verticalScale(60),
                                        width: scale(60),
                                        resizeMode: "cover",
                                        borderRadius: 10,
                                        marginRight: 20,
                                        marginLeft: 20,


                                    }}
                                />
                                <View>
                                    <Text style={styles.hiveDetails}>
                                        Hi
                                    </Text>

                                    <Text style={styles.hiveLastSeen}>
                                        Last hive log :
                                    </Text>
                                </View>

                            </View>

                            <View style={{ marginRight: 30 }}>
                                <Text style={{ fontFamily: "Poppins-Bold", color: "#007AFF" }} onPress={() => navigation.navigate("Hive")}>Manage</Text>
                            </View>

                        </View>
                        <View style={styles.hive}>
                            <View
                                style={{
                                    backgroundColor: "transparent",
                                    height: verticalScale(90),
                                    // justifyContent: "center",
                                    alignItems: "center",
                                    width: scale(60),
                                    flex: 2,
                                    flexDirection: "row"
                                }}
                            >
                                <Image
                                    source={require("../resources/images/apiaries.jpeg")}
                                    style={{
                                        height: verticalScale(60),
                                        width: scale(60),
                                        resizeMode: "cover",
                                        borderRadius: 10,
                                        marginRight: 20,
                                        marginLeft: 20,


                                    }}
                                />
                                <View>
                                    <Text style={styles.hiveDetails}>
                                        Hi
                                    </Text>

                                    <Text style={styles.hiveLastSeen}>
                                        Last hive log :
                                    </Text>
                                </View>

                            </View>

                            <View style={{ marginRight: 30 }}>
                                <Text style={{ fontFamily: "Poppins-Bold", color: "#007AFF" }} onPress={() => navigation.navigate("Hive")}>Manage</Text>
                            </View>

                        </View>
                        <View style={styles.hive}>
                            <View
                                style={{
                                    backgroundColor: "transparent",
                                    height: verticalScale(90),
                                    // justifyContent: "center",
                                    alignItems: "center",
                                    width: scale(60),
                                    flex: 2,
                                    flexDirection: "row"
                                }}
                            >
                                <Image
                                    source={require("../resources/images/apiaries.jpeg")}
                                    style={{
                                        height: verticalScale(60),
                                        width: scale(60),
                                        resizeMode: "cover",
                                        borderRadius: 10,
                                        marginRight: 20,
                                        marginLeft: 20,


                                    }}
                                />
                                <View>
                                    <Text style={styles.hiveDetails}>
                                        Hi
                                    </Text>

                                    <Text style={styles.hiveLastSeen}>
                                        Last hive log :
                                    </Text>
                                </View>

                            </View>

                            <View style={{ marginRight: 30 }}>
                                <Text style={{ fontFamily: "Poppins-Bold", color: "#007AFF" }} onPress={() => navigation.navigate("Hive")}>Manage</Text>
                            </View>

                        </View>
                        


                    </ScrollView>



                </SafeAreaView>
                    <Block>
                    <FloatingButton style={{ left: "80%", bottom:100}}></FloatingButton>

                    </Block>
                </Block>
                
        )


}

export default HivesScreen



const styles = StyleSheet.create({
    container :{

    },
    titleBar:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    headerText:{
        fontFamily:"Poppins-SemiBold",
        fontSize:18
    },
    search:{
        padding:10
    },
    button:{
        top:scale(350)
    },
    hive:{
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
        
    },
    hiveDetails:{
        fontFamily:"Poppins-Regular",
        fontSize:20,
        
    },
    hiveLastSeen:{
        fontFamily:"Poppins-Thin",
        fontSize:12,
        letterSpacing:0,
    }
})






// export default class HivesScreen extends Component {
//     goToApiary() {
//         const { navigation } = this.props
//         navigation.navigate('Apiary')
//     }

//     render() {
//         // const items = ['Apples', 'Pie', 'Juice', 'Cake', 'Nuggets'];
//         // const [search, setSearch] = useState('');
//         // const search2 = React.createRef();
//         return (
//             <SafeAreaView style={styles.container}>
//                 <ScrollView>
//                     <View style={styles.titleBar}>
//                         <Ionicons name='chevron-back' size={24} color="#007AFF" onPress={() => this.goToApiary()}></Ionicons>
//                         <Text style={styles.headerText}>Hives</Text>
//                         <MaterialIcons name='more-vert' size={24} color="#007AFF"></MaterialIcons>
//                     </View>
//                     <SearchBar
//                         text={search}
//                         ref={search2}
//                         onChange={e => console.log(e.nativeEvent)}
//                         onChangeText={setSearch}
//                         onSearchButtonPress={() => search2.current.blur()}
//                     />

//                     {items
//                         .filter(a => a.toLowerCase().indexOf(search.toLowerCase()) !== -1)
//                         .map(a => (
//                             <Text style={styles.listItem} key={a}>
//                                 {a}
//                             </Text>
//                         ))}
//                     <View>

//                     </View>
//                 </ScrollView>
//             </SafeAreaView>
//         )
//     }
// }