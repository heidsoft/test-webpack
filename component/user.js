/**
 * Created by heidsoft on 2016/12/8.
 */
import * as myModule from "component/content";

console.log(myModule.my);
console.log(myModule.square(100)); // 121
console.log(myModule.diag(10, 20)); // 5

export default function () {
    console.log("export default.....");
}