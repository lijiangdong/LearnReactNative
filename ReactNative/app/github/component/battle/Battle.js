import React, {
    Component
} from 'react';
import PlayerPreView from "./PlayerPreView";
import {Text, TouchableOpacity, View} from "react-native";
import PlayerInput from "./PlyerInput";

export default class Battle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playerOne: null,
            playerTwo: null
        }
    }

    handlePlayerOneChange(userInfo) {
        this.setState({
            playerOne: userInfo
        })
    }

    handlePlayerTwoChange(userInfo) {
        this.setState({
            playerTwo: userInfo
        })
    }

    render() {
        let playerOneView = null;
        let playerTwoView = null;
        if (this.state.playerOne) {
            playerOneView = <PlayerPreView
                UserInfo={this.state.playerOne}
                resetPlayer={() => {
                    this.handlePlayerOneChange(null)
                }}
            />
        } else {
            playerOneView = <PlayerInput
                onClickSubmit={(userInfo => {
                    this.handlePlayerOneChange(userInfo)
                })}
                title="PlayerOne"
            />
        }
        if (this.state.playerTwo) {
            playerTwoView = <PlayerPreView UserInfo={this.state.playerTwo}/>
        } else {
            playerTwoView = <PlayerInput
                onClickSubmit={userInfo => {
                    this.handlePlayerTwoChange(userInfo)
                }}
                title="PlayerTwo"/>
        }

        let battleButton = null;
        if (this.state.playerOne && this.state.playerTwo){
            battleButton = <TouchableOpacity style={{
                alignSelf: "center",
                backgroundColor: "black",
                width: 100,
                height: 30,
                borderRadius: 4,
                justifyContent: 'center'
            }}>
                <Text style={{
                    textAlign: 'center',
                    color: "white",
                }}>Battle</Text>
            </TouchableOpacity>
        }

        return (
            <View>
                <View style={{marginTop: 60}}>{playerOneView}</View>

                <View style={{marginTop: 30}}>{playerTwoView}</View>

                <View style={{marginTop: 40}}>{battleButton}</View>
            </View>

        )

    }

}

