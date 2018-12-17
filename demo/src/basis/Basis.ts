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
export class Basis extends Vue{

    /**
     * 请求地址
     */
    siteServer: string = '';

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

    myfecth(){}
    
}

export {Component, Prop, Watch, Emit}
