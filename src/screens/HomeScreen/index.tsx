import React, { useEffect, useState } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import useNavigation from '../../hooks/useNavigation';
import FastImage from 'react-native-fast-image'
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import { FlatList } from 'react-native-gesture-handler';
import { PostType } from '../../components/typs';


const data: PostType[] = [
    {
        title: '안녕',
        description: '안녕하세요',
        image: 'https://github.com/DylanVann/react-native-fast-image/raw/master/docs/assets/scroll.gif',
        postid: '124',
        likeCount: 12
    },
    {
        title: '안녕',
        description: '안녕하세요',
        image: 'https://github.com/DylanVann/react-native-fast-image/raw/master/docs/assets/scroll.gif',
        postid: '124',
        likeCount: 12
    },
]

const HomeScreen = () => {
    const navigatoin = useNavigation();
    const [post, setpost] = useState<PostType[]>([]);

    const getPost = async () => {
        const instance = firebase.functions().httpsCallable('callData')
        try {
            const response = await instance({ data: 'se' })
            console.log(response);
        } catch (error) {
            console.log('Error: ' + error);
        }
    }


    useEffect(() => {
        firebase.functions().useFunctionsEmulator('http://localhost:5000');
        // getPost();
        setpost(data);
    }, [])

    const onLike = (postid: string) => {

    }
    const onDelete = (postid: string) => {

    }
    const onComment = (postid: string) => {
        navigatoin.navigate('CommentScreen', { postid });
    }


    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={post}
                keyExtractor={(item, index) => 'post' + index.toString()}
                ListHeaderComponent={
                    <View style={{ backgroundColor: '#ddd', width: '100%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableWithoutFeedback onPress={() => navigatoin.navigate('PostScreen')}>
                            <Text>Post</Text>
                        </TouchableWithoutFeedback>
                    </View>}
                renderItem={({ item }) =>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <View style={{ width: '100%', minHeight: 50, padding: 10, justifyContent: 'center' }}>
                            <Text>{item.title}</Text>
                        </View>
                        {item.image && <FastImage
                            style={{ width: '100%', height: 500 }}
                            // resizeMode='contain'
                            source={{
                                uri: item.image
                            }}
                        />}



                        <View style={{ width: '100%', padding: 10, minHeight: 50, justifyContent: 'center' }}>
                            <Text>좋아요 {item.likeCount}개  {item.description}</Text>
                        </View>
                        <View style={{ width: '100%', height: 1, backgroundColor: '#dbdbdb' }} />
                        <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableWithoutFeedback onPress={() => onLike(item.postid)}>
                                    <Text>Like</Text>
                                </TouchableWithoutFeedback>
                            </View>

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableWithoutFeedback onPress={() => onComment(item.postid)}>
                                    <Text>Comment</Text>
                                </TouchableWithoutFeedback>
                            </View>

                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableWithoutFeedback onPress={() => onDelete(item.postid)}>
                                    <Text>Delete</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <View style={{ width: '100%', height: 1, backgroundColor: '#dbdbdb' }} />
                    </View>
                }
            />
        </View>
    )
}

export default HomeScreen
