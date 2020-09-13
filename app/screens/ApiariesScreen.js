import React, { Component } from 'react';
import {View} from 'react-native';
import { Text } from '../components';
import { Block,CardSeven,FloatingButton } from '../components';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import {Progress} from '../components';



export default class ApiariesScreen extends Component {

    goToApiary(){
        const { navigation } = this.props;

        return(
            navigation.navigate('Apiary')
        )
    }
    
    render() {
        // const { navigation } = this.props;
        return (
            <Block>

                <ScrollView>
                    <Block center bottom flex={0.5}>
                        <Text h2 center bold></Text>
                        <Text h2 center bold>Apiaries</Text>
                    </Block>
                    <Block>
                        <TouchableOpacity
                            onPress={() => this.goToApiary()}
                            activeOpacity = {1}
                        >
                            <CardSeven
                                title={"Vinny’s Barber"}
                                subTitle={"852 N Virgil Ave, Beverly Hills"}
                                image={{
                                    uri:
                                        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                                }}
                                icon1={"share"}
                                iconColor1={"#fff"}
                                iconBackground1={"purple"}
                                onClicked1={() => {
                                    alert("Hello!");
                                }}
                                icon2={"heart"}
                                iconColor2={"#fff"}
                                iconBackground2={"red"}
                                onClicked2={() => {
                                    alert("Hello!");
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.goToApiary()}
                            activeOpacity={1}
                        >
                            <CardSeven
                                title={"Vinny’s Barber"}
                                subTitle={"852 N Virgil Ave, Beverly Hills"}
                                image={
                                        require('../resources/images/apiaries.jpeg')
                                }
                                icon1={"share"}
                                iconColor1={"#fff"}
                                iconBackground1={"purple"}
                                onClicked1={() => {
                                    alert("Hello!");
                                }}
                                icon2={"heart"}
                                iconColor2={"#fff"}
                                iconBackground2={"red"}
                                onClicked2={() => {
                                    alert("Hello!");
                                }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.goToApiary()}
                            activeOpacity={1}
                        >
                            <CardSeven
                                title={"Vinny’s Barber"}
                                subTitle={"852 N Virgil Ave, Beverly Hills"}
                                image={{
                                    uri:
                                        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                                }}
                                icon1={"share"}
                                iconColor1={"#fff"}
                                iconBackground1={"purple"}
                                onClicked1={() => {
                                    alert("Hello!");
                                }}
                                icon2={"heart"}
                                iconColor2={"#fff"}
                                iconBackground2={"red"}
                                onClicked2={() => {
                                    alert("Hello!");
                                }}
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity 
                            onPress={()=>this.goToApiary()}
                            activeOpacity={1}
                            >
                            <CardSeven
                                title={"Vinny’s Barber"}
                                subTitle={"852 N Virgil Ave, Beverly Hills"}
                                image={{
                                    uri:
                                        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                                }}
                                icon1={"share"}
                                iconColor1={"#fff"}
                                iconBackground1={"purple"}
                                onClicked1={() => {
                                    alert("Hello!");
                                }}
                                icon2={"heart"}
                                iconColor2={"#fff"}
                                iconBackground2={"red"}
                                onClicked2={() => {
                                    alert("Hello!");
                                }}
                            />
                        </TouchableOpacity>
                    </Block>
                    
                    
                    
                   
                </ScrollView>
                <Block>
                    <FloatingButton style={{ left:"80%", bottom: 100 }}></FloatingButton>

                </Block>
            </Block>
        )

    }
}