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
    ActivityIndicator
} from 'react-native';
import axios from 'axios';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import { useState, useEffect } from 'react'
import Geolocation from 'react-native-geolocation-service';
import { useSelector, useDispatch } from 'react-redux'
import { Setcity, Setlong, Setlat, city } from '../../Redux/Reducers/red.js';


function Body() {
    const [Currentday, setCurrentday] = useState("");
    const [Month, setMonth] = useState("");
    const [date, setdate] = useState("");
    const [session, setsession] = useState("AM");
    const [Time, setTime] = useState("");
    const [Min, setMin] = useState("");

    // redux 
    const dispatch = useDispatch()
    const temperaturelat = useSelector((state) => state.Setlat)
    const temperaturelong = useSelector((state) => state.Setlong)
    const City = useSelector((state) => state.Setcity)



    // Location //////

    const [location, setLocation] = useState(false);
    const [currentLongitude, setCurrentLongitude] = useState('');
    const [currentLatitude, setCurrentLatitude] = useState('');
    const [CurrentTemperature, setCurrentTemperature] = useState("")
    const [Temspeed, setTemspeed] = useState('');
    const [min, setmin] = useState('');
    const [max, setmax] = useState('');
    const [Weather, SetWeather] = useState("");
    const [humidity, sethumidity] = useState("");
    const [data, setdata] = useState(false);

    useEffect(() => {
        const date = new Date();
        let day = date.getDay()
        let month = date.getMonth()
        let datetoday = date.getDate()
        let hour = date.getHours()
        let minutes = date.getMinutes()
        setMin(minutes)
        setCurrentday(day)
        setMonth(month)
        setdate(datetoday)
        if (Currentday == 0 && Month == 0) {
            setCurrentday("Monday")
            setMonth("January")
        } else if (Currentday == 1 && Month == 1) {
            setCurrentday("Tuesday")
            setMonth("February")
        } else if (Currentday == 2 && Month == 2) {
            setCurrentday("Wednesday")
            setMonth("March")

        } else if (Currentday == 3 && Month == 3) {
            setCurrentday("Thursday")
            setMonth("April")

        } else if (Currentday == 4 && Month == 4) {
            setCurrentday("Friday")
            setMonth("May")

        } else if (Currentday == 5 && Month == 5) {
            setCurrentday("Saturday")
            setMonth("June")

        } else if (Currentday == 6 && Month == 6) {
            setCurrentday("Sunday")
            setMonth("July")

        }
        else if (Month == 7) {
            setMonth("August")
        }
        else if (Month == 8) {
            setMonth("September")
        }
        else if (Month == 9) {
            setMonth("October")
        }
        else if (Month == 10) {
            setMonth("November")
        }
        else if (Month == 11) {
            setMonth("December ")
        }

        if (hour == 0) {
            hour = 12
            setTime(hour)
        } else if (hour > 12) {
            hour = hour - 12
            setTime(hour)
            setsession("PM")
        } else if (hour > 10) {
            hour = hour - 12
            setTime(`0${hour}`)
        }
        if (minutes < 10) {
            setMin(`0${minutes}`)
        }
    }, []);

    const requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Geolocation Permission',
                    message: 'Can we access your location?',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            console.log('granted', granted);
            if (granted === 'granted') {
                console.log('You can use Geolocation');
                return true;
            } else {
                console.log('You cannot use Geolocation');
                return false;
            }
        } catch (err) {
            return false;
        }
    };

    //    const CityName =  dispatch(Setcity())
    const getLocation = () => {
        const result = requestLocationPermission();
        result.then(res => {
            console.log('res is:', res);
            if (res) {
                Geolocation.getCurrentPosition(
                    position => {
                        console.log(position);
                        setLocation(position);
                        // setCurrentLongitude(position.coords.longitude)
                        // setCurrentLatitude(position.coords.latitude)

                        const reduxlat = dispatch(Setlat(position.coords.latitude))
                        const reduxlong = dispatch(Setlong(position.coords.longitude))

                        setCurrentLongitude(reduxlong.payload)
                        setCurrentLatitude(reduxlat.payload)



                        // console.log("redux work success", temperaturelat)
                        // console.log("redux work success2222", temperaturelong)


                    },
                    error => {
                        // See error code charts below.
                        console.log(error.code, error.message);
                        setLocation(false);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
                );
            }
        });
        // console.log(location);
    };
    useEffect(() => {
        getLocation()
    }, []);

    const serlong = useSelector((state) => state.Setlong)
    const serlat = useSelector((state) => state.Setlat)

    useEffect(() => {
        // console.log("asi mara hy............?>>>>", serlong)
        // console.log("asi mara hy 2222............?>>>>", serlat)
        setCurrentLongitude(serlong)
        setCurrentLatitude(serlat)
    });

    useEffect(() => {
        const API_key = '1945b928a2593f64ffaec7d81344c881'
        if (currentLongitude && currentLatitude) {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=${API_key}&units=metric`
            axios(url)
                .then((res) => {
                    const temfloor = res.data.main.temp
                    const finaltem = Math.round(temfloor)
                    setCurrentTemperature(finaltem)
                    console.log("currentLatitude.....", currentLatitude)
                    console.log("currentLongitude.....", currentLongitude)

                    const speedround = res.data.wind.speed
                    const finalspeed = Math.round(speedround)
                    setTemspeed(finalspeed)

                    const minround = res.data.main.temp_min
                    const minspeed = Math.round(minround)
                    setmin(minspeed)

                    const maxround = res.data.main.feels_like
                    const maxspeed = Math.round(maxround)
                    setmax(maxspeed)
                    const weather = res.data.weather[0].main
                    const humidity = res.data.main.humidity
                    SetWeather(weather)
                    console.log(Weather)
                    sethumidity(humidity)
                })
                .catch((err) => console.log(err))
        }
    }, [currentLongitude, currentLatitude]);


    return (
        <>
            <View style={{ paddingHorizontal: 10 }}>
                <Text style={body.location}>
                    {City}
                </Text>
            </View>
            <View style={{ paddingHorizontal: 10, flexDirection: "row", alignItems: "center" }}>
                <View style={body.header_time}>
                    <Text style={body.day}>
                        {Currentday}, {date}{Month}
                    </Text>
                    {/* <Text style={body.day}>
                        {Time}:{Min}:{session}
                    </Text> */}
                </View>
            </View>
            <SafeAreaView style={{ paddingHorizontal: 20, }}>
                <View style={{ backgroundColor: "#202229", borderRadius: 15, paddingVertical: 10, paddingHorizontal: 10 }} >
                    <View style={{ marginTop: 5 }}>
                        <View>
                            <Text style={{ fontSize: 50, fontWeight: 700, color: "#fff" }}>
                              {CurrentTemperature ? CurrentTemperature : <ActivityIndicator size="large" /> }°C
                            </Text>
                        </View>
                    </View>
                    <View >
                        <Text style={{ fontSize: 20, fontWeight: 700 }}>
                            {Weather}
                        </Text>
                    </View>
                    <View style={body.min_max}>
                        {/* <View style={{ marginTop: 10 }} >
                            <Text style={{ fontSize: 20, fontWeight: 700 }}>
                                {min} °C Min
                            </Text>
                        </View> */}
                        <View style={{ marginTop: 10, alignItems: "center" }} >
                            
                            <Image source={require("../../Assests/images/site.gif")} style={{ width: 60, height: 60 }} />
                            <Text style={{ fontSize: 17, }}>
                                {Temspeed ?Temspeed :<ActivityIndicator size="large" />} m/s
                            </Text>
                            <Text style={{ fontSize: 15, }}>
                                Wind
                            </Text>
                        </View>
                        <View style={{ marginTop: 10, alignItems: "center" }} >
                            <Image source={require("../../Assests/images/tem.gif")} style={{ width: 40, height: 60 }} />
                            <Text style={{ fontSize: 17, }}>
                                {max ? max : <ActivityIndicator size="large" />} °C
                            </Text>
                            <Text style={{ fontSize: 15, }}>
                                Max
                            </Text>
                        </View>
                        <View style={{ marginTop: 10, alignItems: "center" }} >
                            <Image source={require("../../Assests/images/waterdrop.gif")} style={{ width: 40, height: 60 }} />
                            <Text style={{ fontSize: 17, }}>
                                {humidity ? humidity : <ActivityIndicator size="large" />}%
                            </Text>
                            <Text style={{ fontSize: 15, }}>
                                humidity
                            </Text>
                        </View>
                    </View>

                </View>
            </SafeAreaView>
        </>
    );
}

const body = StyleSheet.create({
    location: {
        // textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "#fff"
    },
    day: {
        fontSize: 15,
        fontWeight: "bold"
    },
    textinput: {
        borderWidth: 2,

    },
    header_time: {
        flexDirection: "row"
    },
    min_max: {
        width: "100%",
        backgroundColor: "#232533",
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        borderRadius: 10
    }

})


export default Body;