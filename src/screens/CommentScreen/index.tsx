import React, { useEffect, useState } from 'react'
import { View, Text, TouchableWithoutFeedback, FlatList } from 'react-native'
import useNavigation from '../../hooks/useNavigation';
import FastImage from 'react-native-fast-image'
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';

type Comment = {
    description: string;
    userid: string;
}

const data: Comment[] = [
    {
        description: 'hello',
        userid: '15253'
    },
    {
        description: 'hello',
        userid: '15253'
    },
    {
        description: 'hello',
        userid: '15253'
    }
]

const CommentScreen = () => {
    const navigation = useNavigation();
    const [comment, setcomment] = useState<Comment[]>([])

    const getComment = (postid: string) => {

    }

    useEffect(() => {
        setcomment(data);
        getComment(navigation.state.params.postid);
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
                    <Text>{item.userid} : {item.description}</Text>
                </View>}
            />
        </View>
    )
}

export default CommentScreen
