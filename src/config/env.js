/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = '';
let imgBaseUrl = '';


if (process.env.NODE_ENV === 'development') {
    // baseUrl = 'http://yapi.demo.qunar.com/mock/60609';
    // baseUrl = 'http://203.195.135.253:8080';
    baseUrl = 'https://www.easy-mock.com/mock/5c6d317e8d040716434d0a5b/reading';
    // baseUrl = 'http://yapi.demo.qunar.com/mock/62876';

} else if (process.env.NODE_ENV === 'production') {
	baseUrl = '//elm.cangdu.org';
    imgBaseUrl = '//elm.cangdu.org/img/';
}

export {
	baseUrl,
	imgBaseUrl,
}