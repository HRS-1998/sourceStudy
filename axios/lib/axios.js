'use strict';

import utils from './utils.js';
import bind from './helpers/bind.js';
import Axios from './core/Axios.js';
import mergeConfig from './core/mergeConfig.js';
import defaults from './defaults/index.js';
import formDataToJSON from './helpers/formDataToJSON.js';
import CanceledError from './cancel/CanceledError.js';
import CancelToken from './cancel/CancelToken.js';
import isCancel from './cancel/isCancel.js';
import {VERSION} from './env/data.js';
import toFormData from './helpers/toFormData.js';
import AxiosError from './core/AxiosError.js';
import spread from './helpers/spread.js';
import isAxiosError from './helpers/isAxiosError.js';
import AxiosHeaders from "./core/AxiosHeaders.js";
import HttpStatusCode from './helpers/HttpStatusCode.js';

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios(defaultConfig);
  // console.log(context.request,'n1')
  const instance = bind(Axios.prototype.request, context);
//instance 是一个wrap()函数，执行结果为: Axios.prototype.request的调用
  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults);



// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;


axios.CancelToken = CancelToken;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = AxiosHeaders;

axios.formToJSON = thing => formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.HttpStatusCode = HttpStatusCode;

axios.default = axios;


//---测试数据 
/** 测试create 的config合并*/   

let pending={}

let request=axios.create({
  baseURL:'http://62.234.200.132:8088',
  method:'post',
  url:'/miniProgram/assemblyForward',
  data:{data:JSON.stringify({ues_id:'90004488'}),'type':'/user_check'},
  headers:{
    token:'_Kd!v0V%-N^_#8*OHo5zz*'
  }, 
  // cancelToken:new CancelToken((c)=>{
  //   pending.cancelFn=c
  // }) 
})
request.interceptors.request.use((config)=>{
  console.log(config,'config')
  config.headers['data']=1

})
// request.interceptors.request.use((config)=>{
//   console.log(config,'config')

//   config.headers['data']=2

// })
request({}).then(res=>{
  console.log(res.data)

})

// if(pending.cancelFn)  {
//   console.log('取消触发',pending.cancelFn)
//   pending.cancelFn()
// }





//----------
// this module should only have a default export
export default axios
