import axios from "../../axios.decoration"


//角色設置
const getRoleList = (params) => axios.get('/sys/roleList', params);
const delRole = (params) => axios.get('/sys/deleteRole', params);
const getRolePermission = params => axios.get('/sys/getRolePermission', params);
const getPermissionByRank = params => axios.get('/sys/permissionList', params);
const addRole = params => axios.get('/sys/addRole', params);
const modifyRole = params => axios.get('/sys/modifyRole', params);

export const roleSet = {
    getRoleList,
    delRole,
    getRolePermission,
    getPermissionByRank,
    addRole,
    modifyRole
}




//账号设置
const getArea = params => axios.get('/sys/getArea', params);

const getUserList = params => axios.get('/sys/userList', params);

const getRole = params => axios.get('/sys/getRole', params);

const addUser = params => axios.get('/sys/createUser', params);
const modifyUser = params => axios.get('/sys/modifyUser', params);
const modifyPwd = params => axios.get('/sys/modifyPwd', params);

export const accountSet = {
    getArea,
    getUserList,
    getRole,
    addUser,
    modifyUser,
    modifyPwd
}

//个人中心





