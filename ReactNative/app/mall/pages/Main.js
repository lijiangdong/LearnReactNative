/**
 * Created by lijiangdong on 01/03/2017.
 */
import React,{Component} from 'react';
import {Text, View, Navigator, Image, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home'
import Order from './Order'
import Cart from './Cart'
import Center from './Center'
export default class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedTab:'home'
        }
    }

    render(){
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="主页"
                    renderIcon={() => <Image source={require('../images/ic_tab_home.png')}  style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require('../images/ic_tab_home_press.png')} style={styles.iconStyle} />}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Home {...this.props}></Home>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'order'}
                    title="订单"
                    renderIcon={() => <Image source={require('../images/ic_tab_order.png')}  style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require('../images/ic_tab_order_press.png')} style={styles.iconStyle} />}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    onPress={() => this.setState({ selectedTab: 'order' })}>
                    <Order {...this.props}></Order>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'cart'}
                    title="购物车"
                    renderIcon={() => <Image source={require('../images/ic_tab_cart.png')}  style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require('../images/ic_tab_cart_press.png')} style={styles.iconStyle}/>}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    onPress={() => this.setState({ selectedTab: 'cart' })}>
                    <Cart {...this.props}></Cart>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'center'}
                    title="我的"
                    renderIcon={() => <Image source={require('../images/ic_tab_center.png')} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require('../images/ic_tab_center_press.png')}  style={styles.iconStyle}/>}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    onPress={() => this.setState({ selectedTab: 'center' })}>
                    <Center {...this.props}></Center>
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