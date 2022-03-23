import React, { useState } from 'react';
import {
    FlatList,
    Image,
    ListRenderItem,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MainButton from './MainButton';
import { NavigatorPush, NavigatorshowModal } from '../Navigator';
import Globals from '../Common/Globals';
import commonStyles from "../Common/Styles"

interface Item {
    id: number;
    title: string;
}

export default function HomeScreen() {
    const [frequency, setFrequency] = useState(40)
    const [idSelected, setIdSelected] = useState(4)

    const renderItem = ({item}: any) => {
        const style = {borderColor: Globals.Screens.HomeScreen.colors.light, borderWidth: 2}
        return (
            <View style={{marginHorizontal: 10, marginTop: 20}}>
                <MainButton
                    text={item.title}
                    color={"#124559"}
                    textColor={"#DEAA88"}
                    width={102}
                    scale={3.2}
                    onPressFunc={() => {setFrequency(item.title); setIdSelected(item.id)}}
                    style={item.id == idSelected ? style : {}}
                />
            </View>
        )
    }

    const DATA = [
        {
          id: '1',
          title: '10',
        },
        {
          id: '2',
          title: '20',
        },
        {
          id: '3',
          title: '30',
        },
        {
          id: '4',
          title: '40',
        },
    ];

    const changeScreen = (freq: number, portal: boolean, title: string) => {
        NavigatorshowModal(Globals.Screens.ActScreen.name, {
            topBar: {visible: false}
        }, {
            freq: freq, portal: portal, title: title
        })
    }


    return (
        <LinearGradient
            colors={Globals.Screens.HomeScreen.background}
            style={commonStyles.container}>
            <SafeAreaView style={commonStyles.safeArea}>
                <Text style={[commonStyles.title, styles.colorTitle]}>CHRILLESEN'S HOME</Text>
                <Image source={require('../../assets/images/homePic.jpeg')} style={styles.imageHome}/>
                <MainButton
                    text={"Portail"}
                    color={"#124559"}
                    textColor={"#DEAA88"}
                    width={250}
                    scale={4}
                    onPressFunc={() => changeScreen(frequency, false, "Portail")}
                />
                <MainButton
                    text={"Garage"}
                    color={"#124559"}
                    textColor={"#DEAA88"}
                    width={250}
                    scale={4}
                    onPressFunc={() => changeScreen(frequency, true, "Garage")}
                    style={styles.GarageButton}
                />
                <Text style={styles.freqText}>Actual Frequency</Text>
                <FlatList data={DATA} renderItem={renderItem} horizontal={true}/>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    colorTitle: {
        color: '#124559'
    },
    imageHome: {
        width: '75%',
        height: undefined,
        aspectRatio: 7 / 4,
        borderRadius: 15,
        marginBottom: 50,
    },
    GarageButton: {
        marginVertical: 75,
    },
    freqText: {
        fontSize: 20,
        fontFamily: "impact",
        color: "#B9A394",
    }
});
