/**
 *
 * Created by fjw_zhushunqing on 2017/4/12.
 */


import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator
} from 'react-native';
import HomePage from './HomePage'

export default  function Setup(){
    class Root extends Component{

        renderScene=(route, navigator)=>{
            let Target=route.component;
            return <Target {...route.params} navigator={navigator}/>
        }

        render(){
            return <Navigator
                initialRoute={{component:HomePage}}
                renderScene={(route, navigator)=>this.renderScene(route,navigator)}
                configureScene={route=>Navigator.SceneConfigs.FadeAndroid}/>
        }
    }
    return <Root/>
}
