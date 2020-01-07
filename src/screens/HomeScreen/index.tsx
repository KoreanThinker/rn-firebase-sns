import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import useNavigation from '../../hooks/useNavigation';
import FastImage from 'react-native-fast-image'

const HomeScreen = () => {
    const navigatoin = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableWithoutFeedback onPress={() => navigatoin.navigate('PostScreen')}>
                <Text>Post</Text>
            </TouchableWithoutFeedback>
            <FastImage
                style={{ width: 200, height: 200 }}
                source={{
                    uri: 'https://github.com/DylanVann/react-native-fast-image/raw/master/docs/assets/scroll.gif',
                }}
                resizeMode={FastImage.resizeMode.contain}
            />
        </View>
    )
}

export default HomeScreen
