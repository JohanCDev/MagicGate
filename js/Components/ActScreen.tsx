import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MainButton from './MainButton';
import Globals from '../Common/Globals';
import commonStyles from "../Common/Styles"

interface ActionProps {
    freq: number
    title: string
    portal: boolean
}

export default function ActionScreen(props: ActionProps) {
    return (
        <LinearGradient
            colors={Globals.Screens.ActScreen.background}
            style={commonStyles.container}>
            <SafeAreaView style={commonStyles.safeArea}>
                <Text style={[commonStyles.title, styles.colorTitle]}>{props.title}</Text>
                <MainButton
                    text={"Open"}
                    color={"#124559"}
                    textColor={"#DE6E4B"}
                    width={300}
                    scale={3.2}
                    onPressFunc={() => {console.log("Open")}}
                />
                <MainButton
                    text={"Stop"}
                    color={"#124559"}
                    textColor={"#DE6E4B"}
                    width={300}
                    scale={3.2}
                    onPressFunc={() => {console.log("Stop")}}
                    style={{marginVertical: 75}}
                />
                <MainButton
                    text={"Close"}
                    color={"#124559"}
                    textColor={"#DE6E4B"}
                    width={300}
                    scale={3.2}
                    onPressFunc={() => {console.log("Close")}}
                />
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    colorTitle: {
        color: "#DE6E4B"
    }
})