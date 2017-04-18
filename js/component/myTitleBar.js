/**
 * Created by fjw_zhushunqing on 2017/4/10.
 */

import React,{Component,PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default  class MyTitleBar extends Component {
    static propTypes={
        title: React.PropTypes.string,
        rightBtn:PropTypes.element,
        leftBtn:PropTypes.element
    }


    render() {
        return <View style={styles.container}>
            {this.props.leftBtn}
            <Text style={styles.title}>{this.props.title}</Text>
            {this.props.rightBtn}
            {/* <Image source={require('../../res/images/ic_search_white_48pt.png')} style={styles.icon}/>
            <Image source={require('../../res/images/ic_more_vert_white_48pt.png')} style={styles.icon}/>*/}
        </View>
    }

}

var styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //backgroundColor:'	#00bfff',
        backgroundColor:'#63B8FF',
        padding:8,

        justifyContent:'center',
        alignItems:'center'

    },
    title:{
        color:'#FFFFFF',
        fontSize:16,
        textAlign:'center',
        justifyContent: 'center',
        flex:1

    },
    icon:{
        width:24,
        height:24
    }
})