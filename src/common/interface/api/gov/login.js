import axios from '../../axios.decoration'

export const  login = (params)=>axios.get('/login/sysLogin',params)

export const logout = (params) => axios.get('/login/logout',params)