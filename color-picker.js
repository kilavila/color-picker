import React, {
    useEffect,
    useRef,
    useState,
} from 'react';
import {
    Animated,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function ColorPicker({ colors, selectColor }) {
    useEffect(() => {
        startAnimation();
    }, []);

    const [animationRunning, setAnimationRunning] = useState(false);
    const colorAnimation = useRef(new Animated.Value(0)).current;
    const [paletteShown, setPaletteShown] = useState(false);
    const paletteHeight = useRef(new Animated.Value(0)).current;

    const togglePalette = () => {
        if (!paletteShown) {
            setPaletteShown(true);
            Animated.timing(paletteHeight, {
                toValue: 400,
                duration: 250,
                useNativeDriver: false,
            }).start();
        } else {
            setPaletteShown(false);
            Animated.timing(paletteHeight, {
                toValue: 0,
                duration: 250,
                useNativeDriver: false,
            }).start();
        }
    }

    const startAnimation = () => {
        animateBackground();
    }

    const animateBackground = () => {
        setAnimationRunning(true);
        Animated.sequence([
            Animated.timing(colorAnimation, {
                toValue: 100,
                duration: 20000,
                useNativeDriver: false,
            }),
            Animated.timing(colorAnimation, {
                toValue: 0,
                duration: 20000,
                useNativeDriver: false,
            }),
        ]).start(() => {
            startAnimation();
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <TouchableWithoutFeedback onPress={() => togglePalette()}>
                    <Animated.View style={[styles.pickerToggle, {
                            backgroundColor: colorAnimation.interpolate({
                                                inputRange: [0, 17, 33, 50, 67, 83, 100],
                                                outputRange: colors
                                            })
                        }]}
                    >
                        {/* <Ionicons name='ios-color-palette-outline' size={50} color='hsl(0, 0%, 0%)' /> */}
                    </Animated.View>
                </TouchableWithoutFeedback>
                <Animated.View style={[styles.colorLibContainer, {
                                borderColor: colorAnimation.interpolate({
                                    inputRange: [0, 17, 33, 50, 67, 83, 100],
                                    outputRange: colors
                                }),
                                maxHeight: paletteHeight,
                            }]}
                >
                    <SafeAreaView style={styles.safeArea}>
                        <ScrollView style={styles.scrollView}
                                    horizontal={true}
                        >

                            <View style={styles.colorsRow}>
                                {
                                    colors.map((color) => (
                                        <TouchableOpacity key={color}
                                                        onPress={selectColor(color)}
                                                        style={[styles.colorCircle, {
                                                            backgroundColor: color
                                                        }]}
                                        ></TouchableOpacity>
                                    ))
                                }
                            </View>

                        </ScrollView>
                    </SafeAreaView>
                    <View style={styles.scrollArrowRight}>
                        <Ionicons name='ios-chevron-forward' size={80} color='hsla(0, 0%, 0%, 0.5)' />
                    </View>
                </Animated.View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 12,
    },
    innerContainer: {
        backgroundColor: 'hsl(0, 0%, 100%)',
        elevation: 5,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    pickerToggle: {
        width: '100%',
        padding: 36,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },

    colorLibContainer: {
        width: '100%',
        flexDirection: 'row',
    },
    scrollArrowRight: {
        width: '8%',
        marginLeft: '-8%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    safeArea: {
        width: '100%',
    },
    scrollView: {
        width: '100%',
    },
    colorsRow: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    colorCircle: {
        width: 100,
        height: 100,
        marginHorizontal: 30,
        borderRadius: 999,
        elevation: 2,
    }
});

export default ColorPicker;