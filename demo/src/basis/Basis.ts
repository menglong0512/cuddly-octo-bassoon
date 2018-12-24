import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop, Watch, Emit} from 'vue-property-decorator'
import axios from 'axios'

/**
 * 基类用来定义共用方法
 * @export
 * @class Basis
 * @extends {Vue}
 */
<<<<<<< HEAD
export class Basis extends Vue{
=======
class Basis extends Vue{
>>>>>>> 69f7692a0169455da0ab2a5d043627686e97b0d8

    /**
     * ajax请求 -- axios
     * @param method 请求方式
     * @param apiUrl 请求地址
     * @param queryData 请求参数 
     */
    SEQAjax(method: string, apiUrl: string, queryData?: object): Promise<any> {

        return new Promise(async (resolve, reject) => {
            const resovleHandler = async (rsp:any) => {
                let {message = '操作成功', result = true, status = 200} = rsp
                if (result && status !== 200) result = false
                if (result === 400) message = '请求不存在'
                if (result || !rsp.result) {
                  if (!rsp.result) {
                    // Message({message, type: 'error', duration: '2000'})
                  }
                }
                resolve(rsp) // 在异步操作成功时调用，并将异步操作的结果作为参数传递出去
            }

            try {
                axios({
                    method: method,
                    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
                    url: `${this.siteServer}${apiUrl}`,
                    timeout: 30000,
                    data: queryData
                }).then(response => {
                    const status = response.status
                    try {
                        resovleHandler({...response.data, status})
                    } catch (e) {
                        resovleHandler({status, success: false, message: '网络错误'})
                    }
                });
            } catch (error) {
                resovleHandler({status: 404, success: false, message: '网络错误'})
            }
        })

    }

    // myfecth(){}
    /**
     * 写cookies
     * @param {string} name key值
     * @param {string} value 
     * @param {string} expiredays 过期时间，单位：分钟
     */
    setCookie(name: string, value: string, expiredays: number=60){
        var exp = new Date();
        exp.setTime(exp.getTime() + expiredays*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toUTCString();
    }
    /**
     * 读取cookies
     * @param {string} name key
     */
    getCookie(name: string):string|null {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
 
        if(arr=document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }
    /**
     * 删除cookies
     * @param {string} name key
     */
    delCookie(name: string){
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.getCookie(name);
        if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toUTCString();
    }

    /**
     * sessionStorage存储
     * @param {object} saveObj 要存储的值
     */
    setSession(saveObj: any){
        for(let key in saveObj){
            sessionStorage.setItem(key, saveObj[key]);
        }
    }

    /**
     * sessionStorage取值
     * @param {string} key 
     */
    getSession(key: string): string|null{
        return sessionStorage.getItem(key);
    }

    /**
     * 删除sessionStorage值
     * @param {array|string|undefind} key 
     */
    delSession(key: string){
        switch ( typeof(key) ){
            case 'string':
                sessionStorage.removeItem(key);
                break;
            case 'object':
                for (const arrVal of key) {
                    sessionStorage.removeItem(arrVal);
                }
                break;
            default:
                sessionStorage.clear();
        }
    }
}

const basis = function () {
    return new Basis()
}

export {basis, Component, Prop, Watch, Emit}
