import React, { useEffect, useState } from 'react'
import { View, Text, TouchableWithoutFeedback, PermissionsAndroid, Image } from 'react-native'
import useNavigation from '../../hooks/useNavigation';
import FastImage from 'react-native-fast-image'
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/functions';
import { TextInput } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Select Avatar',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

async function requestWritePermission(callBack: Function) {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'Cool Photo App Camera Permission',
                message:
                    'Cool Photo App needs access to your camera ' +
                    'so you can take awesome pictures.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the camera');
            callBack();
        } else {
            console.log('Camera permission denied');
        }
    } catch (err) {
        console.warn(err);
    }
}


const PostScreen = () => {
    const navigatoin = useNavigation();
    const [title, settitle] = useState('')
    const [descriptions, setdescriptions] = useState('');
    const [image, setimage] = useState<string | undefined>(undefined);

    useEffect(() => {

    }, [])

    const onPost = () => {
        navigatoin.navigate('HomeStack');
    }
    const onImage = () => {
        requestWritePermission(() => {
            ImagePicker.launchImageLibrary(options, (response) => {
                console.log(response.uri);
                setimage(response.uri);
            });
        })

    }

    return (
        <View style={{ flex: 1, backgroundColor: '#aaa' }}>
            <TouchableWithoutFeedback onPress={onPost}>
                <Text>Post</Text>
            </TouchableWithoutFeedback>
            <TextInput value={title} onChangeText={t => settitle(t)} placeholder='title' />
            <TextInput value={descriptions} onChangeText={t => setdescriptions(t)} placeholder='descriptions' />
            <TouchableWithoutFeedback onPress={onImage}>
                <Text>Image</Text>
            </TouchableWithoutFeedback>
            <View style={{ width: '100%', height: 300, backgroundColor: 'red' }}>
                <Image
                    style={{ width: 200, height: 500 }}
                    source={{
                        uri: image
                    }}
                />
            </View>


        </View>
    )
}

export default PostScreen
