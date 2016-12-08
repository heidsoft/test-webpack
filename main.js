import * as myModule from "component/content";
import user from "component/user";
//多个导出
console.log(myModule.my);
console.log(myModule.square(11)); // 121
console.log(myModule.diag(4, 3)); // 5
console.log(user());

document.write("<h2>"+myModule.my+"</h2>");

