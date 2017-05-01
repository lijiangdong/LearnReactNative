/**
 * Created by lijiangdong on 24/02/2017.
 */

import React,{Component} from 'react'
import {ToastAndroid,Button, View} from 'react-native'

export default class Toast extends Component{


    alertLongToast = (content)=>{
        console.log(content);
        ToastAndroid.show(content.toString(),ToastAndroid.LONG);
    }

    alertShortToast = (content)=>{
        console.log(content);
        ToastAndroid.show(content.toString(),ToastAndroid.SHORT);
    }

    render(){
        return(
            <View style={{flexDirection: 'column'}}>
                <Button onPress={this.alertLongToast.bind(this,this.props.text)} title={"长时间Toast"}></Button>
                <Button onPress={this.alertShortToast.bind(this,this.props.text)} title={"短时间Toast"}></Button>
            </View>
        )
    }
}