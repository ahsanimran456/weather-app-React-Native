import {
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
    StyleSheet,
    SafeAreaView,
    TextInput,
    PermissionsAndroid,
    TouchableOpacity
} from 'react-native';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { Setlat, Setlong, Setcity } from '../../Redux/Reducers/red.js';
import AIcon from 'react-native-vector-icons/MaterialIcons';
function Header() {

    const [CityName, setCityName] = useState("");
    // redux    
    const dispatch = useDispatch()
    const City = useSelector((state) => state.Setcity)
    const lat = useSelector((state) => state.Setlat)
    const long = useSelector((state) => state.Setlong)

    const SearchWeather = () => {
        if (CityName != "" && CityName.trim()) {
            const SearchingCity = dispatch(Setcity(CityName))
            const searchtrim = SearchingCity.payload.trim()
            console.log("redux called-header & searchCity", searchtrim)
            const API_key = '1945b928a2593f64ffaec7d81344c881'
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchtrim}&appid=${API_key}&units=metric`
            axios(url)
                .then((res) => {
                    console.log("searchingCity reshit >>>>", res.data.coord)
                    dispatch(Setlat(res.data.coord.lat))
                    dispatch(Setlong(res.data.coord.lon))

                })
                .catch((err) => {
                    console.log("searchingCity reshit Error >>>>", err)
                    if (err) {
                        dispatch(Setcity("City Not Found"))

                    }
                    // dispatch(Setcity(err.message))
                })
        }

        // console.log(CityName)
    }


    return (
        <SafeAreaView>
            <View>
                <View style={header.header_top}>
                    <View style={{ flexDirection: "row", alignItems: "center", width: "80%", borderWidth: 2, borderColor: "#fff", borderRadius: 50 }}>
                        <TextInput placeholder='Search' onChangeText={(e) => { setCityName(e) }} style={header.searches} maxLength={20} />
                        <TouchableOpacity onPress={SearchWeather}>
                            {/* <Icon name="facebook" size={20} color="#4F8EF7" /> */}
                            <AIcon
                                size={30}
                                color="#fff"
                                name="search"
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <AIcon
                            size={28}
                            color="#fff"
                            name="cloud"
                        />
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
}

const header = StyleSheet.create({
    header_top: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: "center",
        width: "100%"
    },
    searches: {
        width: "80%",
        paddingHorizontal: 15,
    }

})

export default Header;