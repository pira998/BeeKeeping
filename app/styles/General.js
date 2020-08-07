import {StyleSheet} from 'react-native';
import theme from './themes';
const imageBackgroundStyle = StyleSheet.create({
    image: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
    }
})


export {imageBackgroundStyle}