/**
 * Created by fjw_zhushunqing on 2017/4/12.
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
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;


export default  class CustomKeyPage extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data: [
                {name: 'Android', checked: true},
                {name: 'IOS', checked: false},
                {name: 'React', checked: true},
                {name: 'Java', checked: true},
                {name: 'JS', checked: true}
            ]
        };
    }

    componentDidMount(){
      alert(this.props.name);
        //this.setState({
        //    name: this.props.name
        //});
    }

    hanldClick() {
        //把任务栈顶部的任务清除
        const navigator = this.props.navigator;
        navigator.pop();
        //this.props.navigator.pop();
        //console.log(this.props.navigator);
        //this.props.navigator.pop()
    }

    returnleft = ()=> {
        return <TouchableOpacity
            activeOpacity={0.7}
            style={{flexDirection:'row',width:24,height:24}}
            onPress={this.hanldClick}>
            <Image style={{width:24,height:24}} source={require('../../res/images/ic_arrow_back_white_36pt.png')}/>
        </TouchableOpacity>
    }
    handleClick = (item)=> {
        item.checked = !item.checked;
        //this.setState({isModified:true});//修改了
    }

    renderCheckBoxs() {
        return this.state.data.map((item, i)=> {
            console.log(ScreenWidth / 2);
            return <CheckBox
                key={`view_${i}`}
                style={{width:ScreenWidth/2,height:50, padding:10}}
                onClick={()=>this.handleClick(item)}
                leftText={item.name}
                isChecked={item.checked}
                unCheckedImage={<Image source={require('../../res/images/ic_check_box_outline_blank.png')} style={styles.checkbox}/>}
                checkedImage={<Image source={require('../../res/images/ic_check_box.png')} style={styles.checkbox}/>}/>
        })


    }

    handleSave=()=>{
        AsyncStorage.setItem('Custom_key',JSON.stringify(this.state.data)).then(()=>{
            alert(JSON.stringify(this.state.data));
        });

    }


    render() {
        return <View>
            <MyTitleBar
                title="自定义界面"
                leftBtn={this.returnleft()}
                rightBtn={<Text style={{fontSize:16,color:'#fff'}} onPress={this.handleSave}>保存</Text>}/>
            <View style={styles.container}>
                {this.renderCheckBoxs()}
            </View>
        </View>
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    checkbox: {
        tintColor: '#63B8FF'
    },
    CheckText: {
        width: 25,
        height: 28,
        fontSize: 16
    }

})