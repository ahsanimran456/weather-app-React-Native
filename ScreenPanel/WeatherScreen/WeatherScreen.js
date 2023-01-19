import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
  Button,
  ImageBackground
} from 'react-native';

import Slider from '../../Components/ViewSlider';
import Location from '../../Components/location';
import Time from '../../Components/Time';
import MainBox from '../../Components/MainBox';
function Weather() {
  return (
    <View style={Weather_screen.mainScreen}  >
      <ImageBackground source={require('../../Assests/images/background.jpg')} resizeMode="cover" style={{ flex: 1 }} >
        <View style={Weather_screen.Header}>
          <View>
            <Text style={Weather_screen.Header_text}>
              Good
              Morning
            </Text>
          </View >
          <View>
            <Image style={{ width: 100, height: 100, borderRadius: 100 }} source={require("../../Assests/images//wt1.gif")} />
          </View>
        </View>
        <View style={Weather_screen.body}>
          <Location />
          {/* <Time />r */}
          <MainBox />
          {/* <Slider /> */}
        </View>
      </ImageBackground>
    </View>

  );
}



const Weather_screen = StyleSheet.create({
  mainScreen: {
    flex: 1,
    // backgroundColor: 'red'
  },
  Header: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "space-around",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  Header_text: {
    fontSize: 30,
    fontWeight: 500
  },
  body: {
    flex: 9,
    // backgroundColor: "red"

  }

})

export default Weather;