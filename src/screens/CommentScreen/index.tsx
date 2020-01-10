import React, { useEffect, useState } from 'react'
import { View, Text, TouchableWithoutFeedback, FlatList } from 'react-native'
import useNavigation from '../../hooks/useNavigation';
import FastImage from 'react-native-fast-image'
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';


const CommentScreen = () => {
    const navigation = useNavigation();
    const [comment, setcomment] = useState([])

    const getComment = async (id: string) => {
        console.log('load');
        const instance = firebase.functions().httpsCallable('getComment')
        try {
            const response = await instance(id)
            console.log(response)
            setcomment(response.data);
        } catch (error) {
            console.log('Error: ' + error);
        }
    }
    useEffect(() => {
        getComment(navigation.state.params.id);
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: 'yellow' }}>

            <FlatList
                data={comment}
                keyExtractor={(item, index) => 'post' + index.toString()}
                ListHeaderComponent={<TouchableWithoutFeedback onPress={() => navigation.navigate('HomeScreen')}>
                    <Text>Comment</Text>
                </TouchableWithoutFeedback>}
                renderItem={({ item }) => <View style={{ width: '100%', minHeight: 50, justifyContent: 'center', padding: 10 }}>
                    <Text>{item}</Text>
                </View>}
            />
        </View>
    )
}

export default CommentScreen
