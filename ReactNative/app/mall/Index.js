/**
 * Created by lijiangdong on 01/03/2017.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    Button,
    TouchableOpacity,
    Navigator,
    BackAndroid
} from 'react-native';


import Splash from './pages/Splash'
import {navigatorGoBack} from './Utils'
import Main from './pages/Main'
var _navigator;
export default class Index extends Component {

    constructor(props){
        super(props);
        BackAndroid.addEventListener('hardwareBackPress',this.goBack);
        this.renderScene = this.renderScene.bind(this);
    }

    goBack = ()=>{
        navigatorGoBack(_navigator);
    }

    renderScene(route,navigator){
        _navigator = navigator;
        let Compo = route.component;
        return <Compo navigator = {navigator} route = {route}/>
    }

    render() {
        return (
            /*            <Navigator
             ref="navigator"
             style={{flex:1}}
             initialRoute={{name:'Splash',component:Splash}}
             renderScene={this.renderScene}
             configureScene={(route) => {
             return Navigator.SceneConfigs.PushFromRight;
             }}>
             </Navigator>*/
            <Main/>
        )
    }
}