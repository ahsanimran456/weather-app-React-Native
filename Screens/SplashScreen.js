import {
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window')
import { useNavigation } from '@react-navigation/native';
import {useEffect} from 'react'

function SplashScreen() {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("MainScreen")

        }, 3000);
    }, []);
    return (
        <View
            style={{
                flex: 1, justifyContent: 'center', alignItems: "center"
            }}>
            <ImageBackground source={require("../Assests/images/splash.gif")} style={{
                flex: 1,
                width: width,
            }}>
                <Text style={
                    {
                        fontStyle: "italic",
                        flex: 1,
                        width: width,

                    }}>
                    Welcome !
                </Text>

            </ImageBackground>
        </View>
    );
}

export default SplashScreen;