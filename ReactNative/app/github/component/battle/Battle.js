import React, {
    Component
} from 'react';
import PlayerPreView from "./PlayerPreView";
import {View} from "react-native";
import PlayerInput from "./PlyerInput";

export default class Battle extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <PlayerInputPage/>
        )
    }

}

class PlayerInputPage extends Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <View style={{marginTop: 60}}>
                <View>
                    <PlayerInput/>
                </View>
                <View  style={{marginTop: 30}}>
                    <PlayerInput/>
                </View>
            </View>
        )
    }
}

class PlayerPrePage extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{marginTop: 60}}>
                <View>
                    <PlayerPreView/>
                </View>
                <View  style={{marginTop: 30}}>
                    <PlayerPreView/>
                </View>
            </View>
        )
    }
}

