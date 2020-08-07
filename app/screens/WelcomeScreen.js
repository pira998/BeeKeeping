import React, { Component } from 'react';
import {Dimensions,FlatList,StyleSheet,Image, Animated, Modal, ScrollView} from 'react-native';
import  {Block,Text}  from '../components';

import theme from "../styles/themes";
import Button from '../components/Button';
// import { ScrollView } from 'react-native-gesture-handler';

const {width,height} = Dimensions.get('window')

class WelcomeScreen extends Component {

    scrollX = new Animated.Value(0);

    state = {
        showTerms : false,
    }
    renderTermServices(){
        return (
            <Modal animationType="slide" visible={this.state.showTerms}> 
                <Block padding={[theme.sizes.padding*2, theme.sizes.padding]} space="between">
                    <Text h2 light>Terms of Services</Text>
                    <ScrollView style={{paddingVertical:theme.sizes.padding}}>
                        <Text caption gray height={18} >Please read these terms and conditions of use carefully before accessing, using or obtaining any materials, information, products or services. By accessing, the KAYAK website, mobile or tablet application, or any other feature or other KAYAK platform (collectively "Our Website") you agree to be bound by these terms and conditions ("Terms") and our Privacy Policy.</Text>
                        <Text caption gray height={18} >Please read these terms and conditions of use carefully before accessing, using or obtaining any materials, information, products or services. By accessing, the KAYAK website, mobile or tablet application, or any other feature or other KAYAK platform (collectively "Our Website") you agree to be bound by these terms and conditions ("Terms") and our Privacy Policy.</Text>
                        <Text caption gray height={18} >Please read these terms and conditions of use carefully before accessing, using or obtaining any materials, information, products or services. By accessing, the KAYAK website, mobile or tablet application, or any other feature or other KAYAK platform (collectively "Our Website") you agree to be bound by these terms and conditions ("Terms") and our Privacy Policy.</Text>
                        <Text caption gray height={18} >Please read these terms and conditions of use carefully before accessing, using or obtaining any materials, information, products or services. By accessing, the KAYAK website, mobile or tablet application, or any other feature or other KAYAK platform (collectively "Our Website") you agree to be bound by these terms and conditions ("Terms") and our Privacy Policy.</Text>
                        <Text caption gray height={18} >Please read these terms and conditions of use carefully before accessing, using or obtaining any materials, information, products or services. By accessing, the KAYAK website, mobile or tablet application, or any other feature or other KAYAK platform (collectively "Our Website") you agree to be bound by these terms and conditions ("Terms") and our Privacy Policy.</Text>
                        <Text caption gray height={18} >Please read these terms and conditions of use carefully before accessing, using or obtaining any materials, information, products or services. By accessing, the KAYAK website, mobile or tablet application, or any other feature or other KAYAK platform (collectively "Our Website") you agree to be bound by these terms and conditions ("Terms") and our Privacy Policy.</Text>

                    </ScrollView>
                    
                    <Button gradient onPress={()=>this.setState({showTerms:false})}>
                        <Text center white>I Understand</Text>
                    </Button>
                </Block>
            </Modal>
        )
    }

    handleLogin(){
        //auth with 3rd party service
        
    }

    renderIllustrations(){

            const {illustrations} = this.props;
            return(
                <FlatList 
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    snapToAlignment ="center"
                    data ={illustrations}
                    extraDate = {this.state}
                    keyExtractor ={(item,index) => `${item.id}`}
                    renderItem = {({item}) => (
                        <Image 
                        source = {item.source}
                        resizeMode = "contain"
                        style={{width,height:height/2,overflow:'visible'}}
                        />
                    )}

                    onScroll = {
                        Animated.event([
                            {
                                nativeEvent:{contentOffset:{x:this.scrollX}}
                            }
                        ], { useNativeDriver: false })
                    }

                />


                
                )    
    }

    renderSteps(){
        const {illustrations} = this.props;
        const stepPosition = Animated.divide(this.scrollX,width);
            return(
                <Block row center middle style={styles.stepsContainer}>
                    {illustrations.map((item,index)=>{
                        const opacity = stepPosition.interpolate({
                            inputRange:[index-1,index,index+1],
                            outputRange:[0.4,1,0.4],
                            extrapolate:'clamp',
                        });
                        return(
                            <Block 
                                animated 
                                flex={false} 
                                key={`step-${index}`} 
                                color="gray" 
                                style={[styles.steps,{opacity}]} />
                        )
                    })}
                </Block>
                )
    }

    render() {

        const {navigation} = this.props;
        return (
            <Block> 
                <Block center bottom flex={0.3}>
                    <Text h1 center bold>Welcome To
                        <Text h1 primary>BeeKeeping.</Text>
                    </Text>
                    <Text h3 gray>Enjoy the experience</Text>
                </Block>
                <Block center >
                    {this.renderIllustrations()}
                    {this.renderSteps()}
                </Block>
                <Block middle flex={0.5} margin={[0,theme.sizes.padding]}>
                    <Button liteShadow gradient onPress={() => navigation.navigate('Login')}>
                        <Text center bold>Login</Text>
                    </Button>
                    <Button shadow onPress={() => navigation.navigate('Signup')}>
                        <Text center bold>Signup</Text>
                    </Button>
                    <Button onPress={() => this.setState({showTerms:true})}>
                        <Text center bold>Term and Services</Text>
                    </Button>
                </Block>
                {this.renderTermServices()}
         </Block>
        )

    }
}

WelcomeScreen.defaultProps = {
    illustrations:[
        { id: 4, source: require('../resources/images/illustration_1.png')},
        { id: 2, source: require('../resources/images/illustration_2.png') },
        { id: 3, source: require('../resources/images/illustration_3.png') },
        { id: 1, source: require('../resources/images/bee_illustration.webp') },
    ],

};



export default WelcomeScreen;

const styles = StyleSheet.create({
    stepsContainer:{
        position:'absolute',
        bottom:theme.sizes.base*3,
        right:0,
        left:0
    },
    steps:{
        width:5,
        height:5,
        borderRadius:5,
        marginHorizontal:2.5,
    },
})