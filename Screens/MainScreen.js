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
        <SafeAreaView style={{ flex: 1, backgroundColor: "#1A1B1C" }} >
            <View style={{ flex: 1, }}>
                <Header />
            </View>
            <View style={{ flex: 6, }}>
                <Body />
            </View>
        </SafeAreaView>
    );
}

export default MainScreen;