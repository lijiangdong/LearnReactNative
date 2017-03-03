/**
 * Created by lijiangdong on 01/03/2017.
 */

import React,{Component} from 'react';
import {
    Dimensions,
    View,
    Image,
    TouchableOpacity,
    InteractionManager
} from 'react-native';
import Main from './Main';
var {height, width} = Dimensions.get('window');
export default class Splash extends Component{

    constructor(props){
        super(props)
    }

    navToMainPage = ()=>{
        const {navigator} = this.props;
        console.log(navigator);
        if (navigator){
            navigator.resetTo({
                name:'Main',
                component:Main
            })
        }
    }

    componentDidMount() {

        this.timer = setTimeout(()=>{
            InteractionManager.runAfterInteractions(this.navToMainPage);
        },2500);

    }

    componentWillUnmount() {
        console.log("11111");
        this.timer && clearTimeout(this.timer);
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <Image style={{flex:1,height:height,width:width}} source={require('../images/ic_welcome.jpg')}>
                </Image>
            </View>
        )
    }
}