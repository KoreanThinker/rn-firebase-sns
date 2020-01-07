import React from 'react'
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import HomeScreen from './HomeScreen'
import PostScreen from './PostScreen'

const MySwitch = createAnimatedSwitchNavigator(
    {
        HomeScreen,
        PostScreen
    },
    {
        // The previous screen will slide to the bottom while the next screen will fade in
        transition: (
            <Transition.Together>
                <Transition.Out
                    type="slide-bottom"
                    durationMs={400}
                    interpolation="easeIn"
                />
                <Transition.In type="fade" durationMs={500} />
            </Transition.Together>
        ),
    }
);


export default createAppContainer(MySwitch)