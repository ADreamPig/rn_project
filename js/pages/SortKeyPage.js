/**
 * Created by fjw_zhushunqing on 2017/4/18.
 */

import React,{Component,PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    AsyncStorage,
    TouchableOpacity
} from 'react-native';
import MyTitleBar from '../component/myTitleBar.js';
import CheckBox from 'react-native-check-box';
import SortableListView from 'react-native-sortable-listview'
import popular_def_lans from '../../res/data/popular_def_lans.json'


export default class SortKeyPage extends Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data:popular_def_lans
        };
      }

    hanldClick=()=> {
        //alert(this===)
        this.props.navigator.pop();
    }

    returnleft = ()=> {
        return <TouchableOpacity
            activeOpacity={0.7}
            style={{flexDirection:'row',width:24,height:24}}
            onPress={this.hanldClick}>
            <Image style={{width:24,height:24}} source={require('../../res/images/ic_arrow_back_white_36pt.png')}/>
        </TouchableOpacity>
    }

    componentDidMount() {
        AsyncStorage.getItem("Custom_key").then(value=>{

        })
    }

    render(){
        return <View style={styles.container}>
            <MyTitleBar
                title="排序"
                leftBtn={this.returnleft()}
                rightBtn={<Text style={{fontSize:16,color:'#fff'}} onPress={this.handleSave}>保存</Text>}/>

            <SortableListView
                data={this.state.data}/>
            </View>
    }
}

var styles=StyleSheet.create({
    container:{
        flex:1
    }
})