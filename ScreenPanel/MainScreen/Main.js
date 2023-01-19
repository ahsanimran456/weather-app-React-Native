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
// const { width, height } = Dimensions.get('window')
import Header from '../../Components2/Header/Header';
import Body from '../../Components2/Body/Body';
function MainComponent() {
  return (
    <View style={Main.parent}>
      <View style={{ flex: 2, backgroundColor: "#6DA3FD" }}>
        <Header />
      </View>
      <View style={{ flex: 3, backgroundColor: "#fff", marginTop: -50, borderTopLeftRadius: 50, borderTopRightRadius: 50,position:"relative"}}>
        <Body />
      </View>
    </View>
  );
}

const Main = StyleSheet.create({
  parent: {
    // width: width,
    flex: 1
  }

})
export default MainComponent;