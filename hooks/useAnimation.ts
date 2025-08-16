import { useRef } from "react";

import { Animated, Easing } from "react-native";

export const useAnimation = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const animatedTop = useRef(new Animated.Value(0)).current;

    const fadeIn = ({
        callback = () => {},
        duration = 350,
        easing = Easing.linear,
        toValue = 1,
        useNativeDriver = true
    }) => {
        Animated.timing(animatedOpacity, {
            duration: duration,
            easing: easing,
            toValue: toValue,
            useNativeDriver: useNativeDriver,
        }).start(callback);
    }

    const fadeOut = ({
        callback = () => {},
        duration = 350,
        easing = Easing.ease,
        toValue = 0,
        useNativeDriver = true
    }) => {
        Animated.timing(animatedOpacity, {
            duration: duration,
            easing: easing,
            toValue: toValue,
            useNativeDriver: useNativeDriver,
        }).start(callback);
    }

    const startMovingTopPosition = ({
        initialPosition = -100,
        callback = () => {},
        duration = 350,
        easing = Easing.ease,
        toValue = 0,
        useNativeDriver = true
    }) => {
        animatedTop.setValue(initialPosition);

        Animated.timing(animatedTop, {
            duration: duration,
            easing: easing,
            toValue: toValue,
            useNativeDriver: useNativeDriver,
        }).start(callback);
    }

    return {
        animatedOpacity,
        animatedTop,
        fadeIn,
        fadeOut,
        startMovingTopPosition
    };
}