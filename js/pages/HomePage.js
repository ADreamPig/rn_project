/**
 * Created by fjw_zhushunqing on 2017/4/7.
 */

import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import PopularPage from './PopularPage';
import MyPage from './MyPage'

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'popular', //默认选中第一个
        };
    }

    render() {
        return <View style={styles.container}>
            <TabNavigator>
                <TabNavigator.Item
                    title="最热"
                    renderIcon={()=><Image style={styles.icon} source={require('../../res/images/ic_popular.png')} />}
                    renderSelectedIcon={()=><Image style={[styles.icon ,{tintColor:'#63B8FF'}]} source={require('../../res/images/ic_popular.png')}/>}
                    selected={this.state.selectedTab==='popular'}
                    onPress={()=>this.setState({selectedTab:'popular'})}
                    >
                    <PopularPage/>

                </TabNavigator.Item>
                <TabNavigator.Item
                    title="趋势"
                    renderIcon={()=><Image style={styles.icon} source={require('../../res/images/ic_trending.png')} />}
                    renderSelectedIcon={()=><Image style={[styles.icon ,{tintColor:'#63B8FF'}]} source={require('../../res/images/ic_trending.png')}/>}
                    selected={this.state.selectedTab==='trending'}
                    onPress={()=>this.setState({selectedTab:'trending'})}
                    >
                    <View style={{backgroundColor:'#0F0',flex:1}}></View>

                </TabNavigator.Item>
                <TabNavigator.Item
                    title="收藏"
                    renderIcon={()=><Image style={styles.icon} source={require('../../res/images/ic_favorite.png')} />}
                    renderSelectedIcon={()=><Image style={[styles.icon ,{tintColor:'#63B8FF'}]} source={require('../../res/images/ic_favorite.png')}/>}
                    selected={this.state.selectedTab==='favorite'}
                    onPress={()=>this.setState({selectedTab:'favorite'})}
                    >
                    <View style={{backgroundColor:'#F0F',flex:1}}></View>

                </TabNavigator.Item>
                <TabNavigator.Item
                    title="我的"
                    renderIcon={()=><Image style={styles.icon} source={require('../../res/images/ic_my.png')} />}
                    renderSelectedIcon={()=><Image style={[styles.icon ,{tintColor:'#63B8FF'}]} source={require('../../res/images/ic_my.png')}/>}
                    selected={this.state.selectedTab==='my'}
                    onPress={()=>{this.setState({selectedTab:'my'});}}
                    >
                    {/*<View style={{backgroundColor:'#0FF',flex:1}}></View>*/}
                    <MyPage  {...this.props}/>
                </TabNavigator.Item>

            </TabNavigator>
        </View>
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {
        width: 26,
        height: 26
    },
})












