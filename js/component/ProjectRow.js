/**
 * Created by fjw_zhushunqing on 2017/4/10.
 */


import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class ProjectRow extends Component {
    static defaultProps() {
        item:[]
    }


    render() {
        return <View style={styles.container}>
            <Text style={styles.name}>{this.props.item.full_name}</Text>
            <Text style={styles.descri}>{this.props.item.description}</Text>

            <View style={styles.bottomTextWrapper}>
                <View
                    style={styles.bottomTextWrapperLeft}>
                    <Text>作者：</Text>
                    <Image style={styles.authorIcon} source={{uri:this.props.item.owner.avatar_url}}/>
                </View>

                <View style={styles.bottomTextWrapperMid}>
                    <Text>stars：</Text>
                    <Text >{this.props.item.stargazers_count}</Text>
                </View>
                <View style={styles.bottomTextWrapperRight}>
                    <Image style={styles.authorIcon} source={require("../../res/images/ic_unstar_transparent.png")}/>
                </View>
            </View>
        </View>
    }
}

var styles = StyleSheet.create({
    container: {
        padding: 8,

        borderColor: '#dddddd',
        borderWidth: 0.5,
        borderRadius: 3,
        marginTop: 8,
        marginLeft: 10,
        marginRight: 10,
        shadowColor: 'gray',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowRadius: 1, //阴影半径
        shadowOpacity: 0.4,
        elevation: 2 //Android ͶӰ
    },
    bottomTextWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginTop: 5
    },
    bottomTextWrapperLeft: {
        flexDirection: 'row',
    },
    bottomTextWrapperRight: {
        flexDirection: 'row',
        marginRight:10
    },
    bottomTextWrapperMid: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16
    },
    descri: {
        color: '#999999',
        fontWeight: 'normal',

        fontSize: 14
    },
    authorIcon: {
        width: 22,
        height: 22,
    }
})