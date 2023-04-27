// import axios from './axios.min.js'
// const axios=import('./axios.min.js')

const instance = axios.create({
    baseURL: 'http://62.234.200.132:8088',
    timeout: 60000,
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        "token": '_Kd!v0V%-N^_#8*OHo5zz*'
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