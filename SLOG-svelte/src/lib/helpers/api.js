import axios from 'axios';

const send = async ({method='', path= '', data={}, access_token=''}) => {
    const commonUrl = 'http://localhost:3000';
    const url =  commonUrl + path;

    const headers = {
        'Access-Control-Allow-Origin': commonUrl, // 크로스 도메인
        'Access-Control-Allow-Credentials': true, 
        'content-type': 'application/json?charset=UTF-8', // 송수신 데이터 타입
        'accept':'application/json',
        'SameSite':"none", // 인증 떄 사용할 쿠키
        'Authorization': access_token, // 인증 토큰
    }

    const options = {
        method, url, headers, data, withCredentials: true,
    }

    try {
        const res = await axios(options);
        return res.data;
    } catch (error) {
        throw error;
    }
}

const getApi = ({path= '', access_token= ''}) => {
    return send({method:'GET', path, access_token});
}
const putApi = ({path= '', data={}, access_token= ''}) => {
    return send({method:'PUT', path, data, access_token});
}
const postApi = ({path= '', data={}, access_token= ''}) => {
    return send({method:'POST', path, data, access_token});
}
const delApi = ({path= '', data={}, access_token= ''}) => {
    return send({method:'DELETE', path, data, access_token});
}

export {
    getApi, putApi, postApi, delApi
}