import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import useNavigation from '../../hooks/useNavigation';

const HomeScreen = () => {
    const navigatoin = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableWithoutFeedback onPress={() => navigatoin.navigate('PostScreen')}>
                <Text>Post</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default HomeScreen
