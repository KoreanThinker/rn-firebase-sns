import React from 'react'
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './HomeScreen'
import PostScreen from './PostScreen'
import CommentScreen from './CommentScreen'

const HomeStack = createStackNavigator(
    {
        HomeScreen,
        CommentScreen
    },
    {
        initialRouteName: 'HomeScreen',
        defaultNavigationOptions: {
            headerShown: false
        }

    }
)

const MySwitch = createAnimatedSwitchNavigator(
    {
        HomeStack,
        PostScreen
    },
    {
        // The previous screen will slide to the bottom while the next screen will fade in
        transition: (
            <Transition.Together>
                <Transition.Out
                    type='slide-right'
                    durationMs={400}
                    interpolation="easeIn"
                />
                <Transition.In type='scale' durationMs={500} />
            </Transition.Together>
        ),
    }
);


export default createAppContainer(MySwitch)