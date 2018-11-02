import Qs from 'qs';
import axios from 'axios';

export default {
    post(url,data){
        var promise =  new Promise(function (resolve,reject) {
            axios.post(url,Qs.stringify(data)).then( (data) => {
                if(data.data && data.data.code === "0018"){//code为0018代表用户未登录
                    if(!window.sessionStorage.href){
                        window.sessionStorage.setItem('href',window.location.href);//存储因后台session失效而强制退出前的页面
                    }
                    window.location.href = '#/login';
                    return
                };
                resolve(data.data);
            }).catch((err)=>{
                reject(err);
            });
        });
        return promise;
    },
    get(url,data){
        var promise =  new Promise(function (resolve,reject) {
            axios.get(url,{params:data}).then( (data) => {
                if(data.data && data.data.code === "0018"){//code为0018代表用户未登录
                    if(!window.sessionStorage.href){
                        window.sessionStorage.setItem('href',window.location.href);//存储因后台session失效而强制退出前的页面
                    }
                    window.location.href = '#/login'
                    return
                };
                resolve(data.data);
            }).catch((err)=>{
                reject(err);
            });
        });
        return promise;
    },
}
