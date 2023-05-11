// import axios from './axios.min.js'
// const axios=import('./axios.min.js')

const instance = axios.create({
    baseURL: 'http://62.234.200.132:8088',
    timeout: 60000,
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        "token": '_Kd!v0V%-N^_#8*OHo5zz*',
        "Access-Control-Allow-Origin":"*"
    },
    // transformResponse: [function (data) {
    //     data = 'hrs';
    //     return data
    // }],
    // onDownloadProgress:function(e){
    //     console.log(e)

    // }

})

// instance({
//     url: '/miniProgram/assemblyForward',
//     method: 'post',
//     // data: {
//     //     'data': JSON.stringify({
//     //         'user_id': '90004488',
//     //     }),
//     //     'type': '/material_ruler'
//     // }
// }).then(res => {
//     console.log(res.data)
// })

//非直接调用debounce
function debounce(fn,delay=300){
    let timer
    return function(){
        let arg=arguments
        console.log(timer,'000')
        if(timer){
            clearTimeout(timer)
            console.log(timer,'1111')
        }
       
        timer=setTimeout(()=>{
            console.log(timer,'222')
           fn.apply(this,arg)
        },delay)
    }

}

//直接调用debounce
function debounce_deep(fn,delay){
     let timer
     return function(){
        let arg=arguments;
        if(timer){
            clearTimeout(timer)
        }

        let callNow=!timer
        timer=setTimeout(()=>{
           timer=null
        },delay)
        if(callNow)   fn.apply(this,arg)
     }
}