import React, {Component} from "react";
import {Button, Text, TextInput, View} from "react-native";
import {getRepos} from "../../Utils";

export default class PlayerInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            "username": ""
        }
    }

    render() {
        return (
            <View>
                <Text style={{alignSelf: 'center', fontSize: 20}}>
                    Player One
                </Text>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 2,
                    borderRadius: 5,
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop: 10
                }}
                           underlineColorAndroid="transparent"
                           placeholderTextColor="gray"
                           placeholder="github username"
                           onChangeText={(text) => {
                               this.state.username = text;
                           }}
                />
                <View style={{
                    marginTop: 30,
                    alignSelf: 'center',
                    width: 200,
                    height: 40
                }}>
                    <Button style={{
                        alignSelf: 'center',
                        backgroundColor: '#000000'

                    }}
                            color="#000000"
                            title='Submit'
                            onPress={() => {
                                getRepos(this.state.username);
                            }}/>
                </View>
            </View>
        )
    }
}