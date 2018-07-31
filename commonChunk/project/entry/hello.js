import $ from 'jquery';
console.log('hello.js console = ', $);
const hello = () => 'Hello webpack';
export default hello;

/*尝试添加或删除一下模块引用来测试compressLazy*/
import extra from './extra';
console.log('extra', extra());