import config from './config';

export default(url,method,params)=>{
    let service=config.service;
    let reqUrl='';//请求url

    let methodUpStr = method.toUpperCase();//统一大写
    let requestparam = {
        method:methodUpStr,
        headers:{
            'Accept':'application/json',
            // token:token  //token 验证
        }
    };
    if(methodUpStr == "GET"){
        let str = getFetchUrl(params);
        reqUrl += str;
    }else{
        requestparam.body = JSON.stringify(params);
    }

    return fetch(reqUrl,requestparam)
            .then(response =>response.json())
            .then(response =>{

                return response;
            })
            .catch(error=>error)


    //返回get请求的请求地址
    const getFetchUrl = (params)=>{
        let str = '';
        if(typeof params ==='object'&&params){
            str += '?';
            for(let i in params){
                str += i + '=' + params[i] + '&';
            }
        }
        return str;
    }

    //form表单形式
    







}



