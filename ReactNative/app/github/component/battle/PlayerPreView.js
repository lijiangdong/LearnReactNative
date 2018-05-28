import React,{Component} from "react";
import {Image, Text, View} from "react-native";

export default class PlayerPreView extends Component{
    constructor(props) {
        super(props);
    }

    render(){

        return (
            <View>
                <View>
                    <Image
                        style={{height:100,width:100,alignSelf:'center'}}
                        source = {{uri:this.props.UserInfo.profile.avatar_url}}/>
                    <Text
                        style = {{fontSize:15,alignSelf:'center',textColor:'#000000'}}>
                        @{this.props.UserInfo.profile.login}
                    </Text>
                    <Text style = {{alignSelf:"center",marginTop:5,color:'red'}}>reset</Text>
                </View>
            </View>
        )
    }
}