/**
 * Created by lijiangdong on 24/02/2017.
 */

import React, { Component } from 'react';
import { ListView, Button, View, ToastAndroid, Text, Image, TouchableOpacity } from 'react-native';

var ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});
export default class ListViewDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    fetchData = (callback) => {
        fetch('http://news-at.zhihu.com/api/4/news/before/20170216')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState(responseJson.stories);
                return responseJson.stories;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getList = async () => {
        ToastAndroid.show("test", ToastAndroid.LONG);
        console.log("获取数据");
        let useCase = new UseCase();
        const response = await useCase.checkMyGameList();
        console.log(response);
        this.setState({
            list: response
        });
    }


    renderRow = (data) => {
        return (
            <TouchableOpacity>
                <View style={{
                flexDirection: 'row',
                flex: 1,
                paddingBottom: 5,
                paddingTop: 5,
                paddingLeft: 10,
                paddingRight: 10
            }}>
                    <Image
            style={{
                width: 60,
                height: 60
            }}
            source={{
                uri: data.images[0]
            }} ></Image>
                    <Text style={{
                fontSize: 14,
                flex: 1,
                marginLeft: 10
            }}>{data.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }


    render() {
        console.log("aaaaaa");
        return (
            <View>
                <ListView
            dataSource={ds.cloneWithRows(this.state.list)}
            renderRow={this.renderRow}>
                </ListView>
                <Button style={{
                height: 60
            }} onPress={this.getList} title={"获取数据"}></Button>
            </View>
        )
    }
}

class UseCase {
    checkMyGameList= async () => {
        try {
            const url = "http://news-at.zhihu.com/api/4/news/before/20170216";
            const response = await fetch(url);
            const responseJson = await response.json();
            return responseJson.stories;
        } catch ( e ) {
            console.log(e);
        }
    }
}
