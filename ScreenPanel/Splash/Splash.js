import {
    Text,
    View,
    Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
function Splash() {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(()=>{
            navigation.navigate("Weather")
          
        },3000);
        // navigation.navigate("Home")
    },);    
    return (
        <View style={{flex:1,backgroundColor:"#fff",justifyContent:'center',alignItems:"center"}}>
            <Image style={{width:400,height:400}} source={require("../../Assests/images/52679-music-loader.gif")} />
            <Text>
                hello 
            </Text>
        </View>
    );
}

export default Splash;