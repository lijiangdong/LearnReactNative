import React, {
    Component
} from 'react';
import PlayerPreView from "./PlayerPreView";
import {View} from "react-native";
import PlayerInput from "./PlyerInput";

export default class Battle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            UserInfo: null
        }
    }

    handleChange(userInfo){
        this.setState({
            UserInfo:userInfo
        })
    }

    render() {
        let view = null;
        if (this.state.UserInfo) {
            view = <View style={{marginTop: 60}}><PlayerPreView UserInfo={this.state.UserInfo}/></View>
        } else {

            view = <View style={{marginTop: 60}}><PlayerInput test={(userInfo => {
                this.handleChange(userInfo)
            })}/>
            </View>

        }
        return (view)

    }

}

