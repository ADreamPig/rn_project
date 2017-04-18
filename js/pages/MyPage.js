/**
 * Created by fjw_zhushunqing on 2017/4/12.
 */

import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    RefreshControl
} from 'react-native';
import MyTitleBar from '../component/myTitleBar';
import ProjectRow from '../component/ProjectRow';
import CustomKeyPage from '../pages/CustomKeyPage';
import ScrollableTabView from 'react-native-scrollable-tab-view';


export default class MyPage extends Component {

    gotoCustomKey = ()=> {
        const {navigator} = this.props;
        navigator.push({
            component: CustomKeyPage,
            params: {
                navigator: navigator,
                name: '123',
                b: '567'
            }
        })
    }

    gotoSortKey=()=>{
        const {navigator} = this.props;
        navigator.push({  component: SortKeyPage,});
    }


    render() {
        return <View style={styles.container}>
            <MyTitleBar title={"我的"}/>

            <Text style={{padding:10,flex:1}} onPress={this.gotoCustomKey}>自定义分类</Text>
            <Text style={{padding:10,flex:1}} onPress={this.gotoSortKey}>自定义排序</Text>
        </View>
    }

}
var styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})

