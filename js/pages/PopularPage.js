/**
 * Created by fjw_zhushunqing on 2017/4/10.
 */


import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    RefreshControl
} from 'react-native';
import MyTitleBar from '../component/myTitleBar.js';
import ProjectRow from '../component/ProjectRow.js';
import ScrollableTabView from 'react-native-scrollable-tab-view';
//import  from 'react-native'



export default  class PopularPage extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            lables: ['Android', 'IOS', 'Java']

        };
    }

    renderlable() {
        return this.state.lables.map((item)=> {
            return <PopularTab key={`tab${item}`}style={styles.tabText} tabLabel={item}></PopularTab>
        })
    }

    returnRightBtn(){
        return<View style={styles.rightBtn}>
            <Image style={styles.icon} source={require('../../res/images/ic_search_white_48pt.png')}/>
            <Image source={require('../../res/images/ic_more_vert_white_48pt.png')} style={styles.icon}/>
            </View>
    }

    render() {
        return <View style={styles.container}>
            <MyTitleBar title={'Popular'}
                        leftBtn={<View style={styles.icon2} />}
                rightBtn={this.returnRightBtn()}/>
            <ScrollableTabView
                tabBarBackgroundColor="#63B8FF"
                tabBarActiveTextColor="#FFF"
                tabBarInactiveTextColor="#F5FFFA"
                tabBarUnderlineStyle={{backgroundColor:"#E7E7E7",height:2}}>
                {this.renderlable()}
            </ScrollableTabView>
        </View>
    }

}

class PopularTab extends Component {
    static defaultProps = {
        tabLabel: 'IOS',

    }
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),//是一个优化，节省无用的UI渲染
            isloading:false,
        };

    }

    renderRow(obj) {
        return <ProjectRow item={obj}></ProjectRow>
    }

    loadData(){
        this.setState({isloading:true});
        fetch(`https://api.github.com/search/repositories?q=${this.props.tabLabel}&sort=stars`)
            .then((response)=>response.json())
        .then(json=>{
                this.setState({dataSource:this.state.dataSource.cloneWithRows(json.items),isloading:false});
            }).catch((error) => {
                console.error(error);
            }).done();
    }

    refresh=()=>{
        this.loadData();
    }


    render() {
        return <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            refreshControl={
                    <RefreshControl
                        refreshing={this.state.isloading}
                        onRefresh={this.refresh}
                        tintColor="#63B8FF"
                        title="正在加载..."
                        titleColor="#63B8FF"
                        colors={['#63B8FF']}/>}
            >
        </ListView>
    }

    componentDidMount() {
        this.loadData();
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    tabText: {
        fontSize: 16,
        padding: 5,
        textAlign: 'center',
    },
icon2:{
    width:48,
    height:24
},
    icon:{
        width:24,
        height:24
    },
    rightBtn:{
        flexDirection:'row',
        alignItems:'center'
    }
})