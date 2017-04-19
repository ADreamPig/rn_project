
/**
 *
 * Created by fjw_zhushunqing on 2017/4/19.
 */
class ArrayUtils{


    static isEquals(a,b){
        return JSON.parse(a)==JSON.parse(b)
    }

    static ArrayClone(a){
        return a.map((item)=>{
            var obj={};
            for(var p in item){
                obj[p]=item[p];
            }
            return obj;
        })
    }
}

// var state =
//  [
//        {name: 'Android', checked: true},
//        {name: 'IOS', checked: false},
//        {name: 'React', checked: true},
//        {name: 'Java', checked: true},
//        {name: 'JS', checked: true}
//    ]
//;
//var state1 =
//  [
//        {name: 'Android', checked: true},
//        {name: 'IOS', checked: false},
//        {name: 'React', checked: true},
//        {name: 'Java', checked: true},
//        {name: 'JS', checked: true}
//    ]
//;
//var b=ArrayUtils.ArrayClone(state)
//state[0]='mmmmm';
//console.log(b);




