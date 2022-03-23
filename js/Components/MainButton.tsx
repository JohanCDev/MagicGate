import React from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {NavigatorshowModal} from '../Navigator';
import {Options} from 'react-native-navigation';

interface ButtonProps {
    text: string;
    color: string;
    textColor: string;
    width: number;
    style?: any;
    scale: number;
    onPressFunc: Function;
}

export default function MainButton(props: ButtonProps) {
    const animation = new Animated.Value(0);
    const inputRange = [0, 1];
    const outputRange = [1, 0.8];
    const scale = animation.interpolate({inputRange, outputRange});

    const onPressIn = () => {
        Animated.spring(animation, {
            toValue: 0.3,
            useNativeDriver: true,
        }).start();
    };

    const onPressOut = () => {
        Animated.spring(animation, {
            toValue: 0,
            useNativeDriver: true,
        }).start();
        props.onPressFunc();
    };

    return (
        <Animated.View
            style={[
                {
                    width: props.width,
                    backgroundColor: props.color,
                    height: props.width / props.scale,
                    transform: [{scale}],
                },
                styles.buttonStyle,
                props.style,
            ]}>
            <TouchableOpacity
                activeOpacity={1}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
                style={styles.insideButton}>
                <Text style={[styles.textStyle, {color: props.textColor}]}>
                    {props.text}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'cyan',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%',
        flex: 1,
    },
    logoView: {
        borderStyle: 'solid',
        borderWidth: 2,
        height: '60%',
        width: '70%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.6,
        elevation: 10,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 5},
    },
    insideButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: 'black',
        fontFamily: "impact",
        fontSize: 20,
    },
});
