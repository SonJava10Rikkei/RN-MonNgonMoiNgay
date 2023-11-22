import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {TapGestureHandler, TapGestureHandlerGestureEvent} from 'react-native-gesture-handler';
import Animated, {
    measure,
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedRef,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

interface RippleProps {
    style?: StyleProp<ViewStyle>;
    onTap?: () => void;
    rippleScaleColor?: string; // Thêm prop để nhận màu
    children?: any;
}

const Ripple: React.FC<RippleProps> = ({
                                           children,
                                           style,
                                           onTap,
                                           rippleScaleColor = 'rgba(255, 179, 0, 0.56)'
                                       }) => {
    const centerX = useSharedValue(0);
    const centerY = useSharedValue(0);
    const scale = useSharedValue(0);

    const aRef = useAnimatedRef<View>();
    const width = useSharedValue(0);
    const height = useSharedValue(0);

    const rippleOpacity = useSharedValue(0);

    const tapGestureEvent = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
        onStart: (tapEvent) => {
            const layout = measure(aRef);
            // @ts-ignore
            width.value = layout.width;
            // @ts-ignore
            height.value = layout.height;

            centerX.value = tapEvent.x;
            centerY.value = tapEvent.y;

            rippleOpacity.value = 1;
            scale.value = 0;
            scale.value = withTiming(1, {duration: 1});
        },
        onActive: () => {
            if (onTap) runOnJS(onTap)();
        },
        onFinish: () => {
            scale.value = withTiming(0, {duration: 600});
            // Thu màu sắc về điểm bấm
            rippleOpacity.value = withTiming(0, {duration: 600});
        },
    });

    const rStyle = useAnimatedStyle(() => {
        const circleRadius = Math.sqrt(width.value ** 2 + height.value ** 2);
        const translateX = centerX.value - circleRadius;
        const translateY = centerY.value - circleRadius;

        return {
            width: circleRadius * 2,
            height: circleRadius * 2,
            borderRadius: circleRadius,
            opacity: rippleOpacity.value,
            top: 0,
            left: 0,
            backgroundColor: rippleScaleColor,
            position: 'absolute',
            transform: [
                {translateX},
                {translateY},
                {
                    scale: scale.value,
                },
            ],
        };
    });

    return (
        <View ref={aRef} style={style}>
            <TapGestureHandler onGestureEvent={tapGestureEvent}>
                <Animated.View style={[style, {overflow: 'hidden'}]}>
                    <View>{children}</View>
                    <Animated.View style={rStyle}/>
                </Animated.View>
            </TapGestureHandler>
        </View>
    );
};

const styles = StyleSheet.create({});
export default Ripple;
