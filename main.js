console.log("angularjs webpack!!!");

import * as myModule from "component/content";
import user from "component/user";
import './css/app.css'
import 'jquery'
//多个导出
// console.log(myModule.my);
// console.log(myModule.square(11)); // 121
// console.log(myModule.diag(4, 3)); // 5
// console.log(user());

class Persson{
    
    //constructor
    constructor(){
        console.log("hello es2015!!!");
    }
    
}

new Persson();

document.write("<h2>"+myModule.my+"</h2>");



