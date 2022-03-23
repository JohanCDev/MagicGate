import React from "react"
import { StyleSheet } from "react-native"

const commonStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    safeArea: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        marginVertical: 50,
        fontSize: 30,
        fontFamily: "impact",
        textAlign: 'center',
    },
})

export default commonStyles;