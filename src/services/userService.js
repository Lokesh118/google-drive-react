import { authAxios } from "./Helper";

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};
export const signUp = (user) => {
    return authAxios.post('/auth/v2/register',user).then((response) => response.data)
}

export const login = (user) => {
  return authAxios.post('/auth/v2/login',user).then((response) => response.data)
}

export const resetRequest = (params) => {
  return authAxios.post('/auth/v1/reset-request', {params: params}).then((response) => response)
}

export const resetPassword = (params) => {
    return authAxios.post('/auth/v2/password-reset', {params: params}).then((response) => response)
}