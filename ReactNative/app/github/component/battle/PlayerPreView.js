import React, {Component} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";

export default class PlayerPreView extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <View>
                <Image
                    style={{height: 100, width: 100, alignSelf: 'center'}}
                    source={{uri: this.props.UserInfo.profile.avatar_url}}/>
                <Text
                    style={{fontSize: 15, alignSelf: 'center', textColor: '#000000'}}>
                    @{this.props.UserInfo.profile.login}
                </Text>
                <TouchableOpacity onPress={()=>{
                    this.props.resetPlayer&&this.props.resetPlayer()
                }}>
                    <Text style={{alignSelf: "center", marginTop: 5, color: 'red'}}>reset</Text>
                </TouchableOpacity>
            </View>

        )
    }
}