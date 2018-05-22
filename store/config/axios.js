import axios from 'axios'

// 全局默认设置
axios.defaults.baseURL = 'http://cangdu.org:8001';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';

//添加一个请求拦截器
axios.interceptors.request.use(function(config){
    //在请求发送之前做一些事
    let method = config.method.toUpperCase()
    if (method === 'POST') {

    } else if (method === 'GET') {
        config = {
            ...config
        }
    }
    
    return config;
},function(error){
    //当出现请求错误是做一些事
    return Promise.reject(error);
});

//添加一个返回拦截器
axios.interceptors.response.use(function(response){
    //对返回的数据进行一些处理
    // 把相应的数据作为 payload 触发 mutation
    let res = {}
    res.data = response.data
    res.status = response.status
    res.statusText = response.statusText
    // console.log('返回拦截：', res)
    return res;
},function(error){
    //对返回的错误进行一些处理
    return Promise.reject(error);
});



export default axios