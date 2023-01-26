import {
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
    StatusBar,
    SafeAreaView
} from 'react-native';
import Header from '../Components/Header/Header';
import Body from '../Components/Body/Body';
function MainScreen() {
    return (
        <View style={{ flex: 1, backgroundColor:"#1A1B1C" }}  >
            {/* <StatusBarhidden={true}/> */}
            {/* <ImageBackground source={require("../Assests/images/mob.jpg")} style={{ flex: 1 }} resizeMode="cover"> */}
                <View style={{ flex: 1,}}>
                    <Header />
                </View>
                <View style={{ flex: 6, }}>
                    <Body/>
                </View>
            {/* </ImageBackground> */}
        </View>
    );
}

export default MainScreen;