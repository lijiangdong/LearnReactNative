/**
 * Created by lijiangdong on 01/03/2017.
 */

import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';

export default class Home extends Component{
    constructor(props){
        super(props)
        this._renderDotIndicator = this._renderDotIndicator.bind(this);
    }

    _renderDotIndicator(){
        return <PagerDotIndicator pageCount={4} />;
    }

    render(){

        return (
            <View style={{backgroundColor:'#f5f5f5',flex:1}}>
                <View style={{backgroundColor:"black",flexDirection:'row',height:48}}>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <TouchableOpacity>
                            <View style={{justifyContent: 'flex-start',flexDirection:'row',alignItems:'center'}}>
                                <Image style={{width:20,height:26,marginLeft:8}} source={require('../images/ic_home_top_location.png')}></Image>
                                <Text style={{color:'white', fontSize:13,marginLeft:3}}>定位中</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
                        <Image style={{width:32,height:25}} source={require('../images/ic_home_top_icon.png')}></Image>
                    </View>
                    <View style={{justifyContent:'flex-end',alignItems:'center',flex:1,flexDirection:'row'}}>
                        <TouchableOpacity>
                            <Image source={require('../images/ic_home_top_search.png')}
                                   style={{width:24,height:24,marginRight:8,alignItems:'center'}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <IndicatorViewPager
                        style={{height:140}}
                        indicator={this._renderDotIndicator()}
                    >
                        <View><Image source={require('../images/1.jpg')}/></View>
                        <View><Image source={require('../images/2.jpg')}/></View>
                        <View><Image source={require('../images/3.jpg')}/></View>
                        <View><Image source={require('../images/4.jpg')}/></View>
                    </IndicatorViewPager>
                    <View>
                        <View style={{paddingBottom:10,paddingTop:10,flexDirection:'row',backgroundColor:'white'}}>
                            <View style={{flex:1}}>
                                <TouchableOpacity>
                                    <Image style={{width:80,height:100,alignSelf:'center'}} source={require('../images/img_1.png')}>
                                        <View style={styles.center_item_wrap}>
                                            <Text style={styles.center_item_tv}>餐厅</Text>
                                        </View>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1}}>
                                <TouchableOpacity>
                                    <Image style={{width:80,height:100,alignSelf:'center'}} source={require('../images/img_2.png')}>
                                        <View style={styles.center_item_wrap}>
                                            <Text style={styles.center_item_tv}>蔬菜</Text>
                                        </View>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1}}>
                                <TouchableOpacity>
                                    <Image style={{width:80,height:100,alignSelf:'center'}} source={require('../images/img_3.png')}>
                                        <View style={styles.center_item_wrap}>
                                            <Text style={styles.center_item_tv}>奶茶甜品</Text>
                                        </View>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1}}>
                                <TouchableOpacity>
                                    <Image style={{width:80,height:100,alignSelf:'center'}} source={require('../images/img_4.png')}>
                                        <View style={styles.center_item_wrap}>
                                            <Text style={styles.center_item_tv}>新品推荐</Text>
                                        </View>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    center_item_wrap:{
        alignSelf:'center',
        alignItems:'center',
        flex:1,
        justifyContent:'flex-end'
    },
    center_item_tv:{
        fontSize:14,
        marginBottom:8,
        backgroundColor:'#00000000'
    }
})