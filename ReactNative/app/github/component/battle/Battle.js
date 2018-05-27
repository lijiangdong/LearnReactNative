import React, {
    Component
} from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Button
} from "react-native";

export default class Battle extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={{marginTop: 60, alignSelf: 'center', fontSize: 20}}>
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
                           placeholder="github username">
                </TextInput>
                <View style={{
                    marginTop:30,
                    alignSelf:'center',
                    width:200,
                    height:40
                }}>
                    <Button style={{
                        alignSelf: 'center',
                        backgroundColor: '#000000'

                    }}
                            color="#000000"
                            title='Submit'
                            onPress={() => {
                            }}/>
                </View>

                <Text style={{marginTop: 50, alignSelf: 'center', fontSize: 20}}>
                    Player Two
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
                           placeholder="github username">
                </TextInput>
                <View style={{
                    marginTop:30,
                    alignSelf:'center',
                    width:200,
                    height:40
                }}>
                    <Button style={{
                        alignSelf: 'center',
                        backgroundColor: '#000000'

                    }}
                            color="#000000"
                            title='Submit'
                            onPress={() => {
                            }}/>
                </View>
            </View>
        )
    }
}