import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

import Index from './mall/Index'
import ListViewDemo from './listview/ListViewDemo'
export default class LearnReactNative extends Component {

    render() {
        return (
            <Index></Index>
        )
    }
}


AppRegistry.registerComponent('LearnReactNative', () => LearnReactNative);