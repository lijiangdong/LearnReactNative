import React,{
    Component
} from 'react';

import {
    Image,
    StyleSheet
} from 'react-native';
import TabNavigator from "react-native-tab-navigator";
import Home from "./Home";
import Battle from "./battle/Battle";
import Popular from "./Popular";

export default class Main extends Component {

    constructor(props){
        super(props)
        this.state = {
            selectedTab:'battle'
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image source={require('../images/ic_tab_home.png')}  style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require('../images/ic_tab_home_press.png')} style={styles.iconStyle} />}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Home {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'battle'}
                    title="Battle"
                    renderIcon={() => <Image source={require('../images/ic_tab_home.png')}  style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require('../images/ic_tab_home_press.png')} style={styles.iconStyle} />}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    onPress={() => this.setState({ selectedTab: 'battle' })}>
                    <Battle {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'popular'}
                    title="Popular"
                    renderIcon={() => <Image source={require('../images/ic_tab_home.png')}  style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require('../images/ic_tab_home_press.png')} style={styles.iconStyle} />}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    onPress={() => this.setState({ selectedTab: 'popular' })}>
                    <Popular {...this.props}/>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}
const styles=StyleSheet.create({
    iconStyle:{
        width:20,
        height:20,
    },
    textStyle:{
        color:'#999',
    },
    selectedTextStyle:{
        color:'black',
    }
});