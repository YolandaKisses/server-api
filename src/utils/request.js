import axios from 'axios'
import { Message } from 'element-ui';

const handleNetworkError = (errStatus) => {
  const networkErrMap = {
    "400": "错误的请求", // token 失效
    "401": "未授权，请重新登录",
    "403": "拒绝访问",
    "404": "请求错误，未找到该资源",
    "405": "请求方法未允许",
    "408": "请求超时",
    "500": "服务器端出错",
    "501": "网络未实现",
    "502": "网络错误",
    "503": "服务不可用",
    "504": "网络超时",
    "505": "http版本不支持该请求",
  };
  if (errStatus) {
    Message.error(networkErrMap[errStatus] ?? `其他连接错误 --${errStatus}`);
    return;
  }
  Message.error("无法连接到服务器！");
};

const handleAuthError = (errno) => {
  const authErrMap = {
    "10031": "登录失效，需要重新登录", // token 失效
    "10032": "您太久没登录，请重新登录~", // token 过期
    "10033": "账户未绑定角色，请联系管理员绑定角色",
    "10034": "该用户未注册，请联系管理员注册用户",
    "10035": "code 无法获取对应第三方平台用户",
    "10036": "该账户未关联员工，请联系管理员做关联",
    "10037": "账号已无效",
    "10038": "账号未找到",
  };

  if (Object.prototype.hasOwnProperty.call(authErrMap, 'errno')) {
    Message.error(authErrMap[errno]);
    // 授权错误，登出账户
    // logout();
    return false;
  }

  return true;
};

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 15000,
});

request.interceptors.request.use(config => {
    // 添加token
    config.headers["Authorization"] = localStorage.getItem("token") || "";
    return config;
  },
  error => {
    // Do something with request error
    // 错误处理
    return Promise.reject(error)
  }
);

request.interceptors.response.use(
  (response) => {
    // 状态码不为200时失败处理
    if (response.status !== 200) return Promise.reject(response.data);
    // 失败提示信息
    handleAuthError(response.data.errno);
    // 响应成功的返回
    return response.data;
  },
  (err) => {
    // 服务器响应码处理
    handleNetworkError(err.response.status);
    Promise.reject(err.response);
  }
);

export default request