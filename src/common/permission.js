import { getSession, getLocalStorage } from './utils/index'
import { constant } from './constant/index'
let permissionStr = getLocalStorage(constant.PERMISSION)
if (permissionStr) {
    permissionStr = JSON.parse(permissionStr)
}
// console.log(permissionStr)

let mock = [
    // {
    //     cUrls: "",
    //     url: 'index',
    //     level: 1,
    //     permissionName: "首页",
    //     permission: "",
    //     rank: 1,
    //     seq: 7,
    //     type: "1",
    //     icon: "icon-shouye",
    //     id: 7,
    //     isUse: 1,
    //     parentId: null,
    //     child: [

    //     ]
    // },
    
     {
        cUrls: "",
        url: 'dataCenter',
        level: 1,
        permissionName: "示例模块",
        permission: "",
        rank: 1,
        seq: 7,
        type: "1",
        icon: "icon-shujuzhongxin",
        id: 7,
        isUse: 1,
        parentId: null,
        child: [
            {
                cUrls: "roleSet",
                url: 'dataBase',
                level: 2,
                permissionName: "常用表格方式",
                description: '这个业务的简单解释这个业务的简单解释这个业务的简单解释这个业务的简单解释',
                icon: "icon-shujutongji",
                id: 33,
                isUse: 1,
                parentId: 1,
                permission: "",
                rank: 1,
                seq: 3,
                type: "1",
            }, 
           
            {
                cUrls: "personalCenter",
                url: 'dataImport',
                level: 2,
                permissionName: "新增数据模式一",
                description: '这个业务的简单解释这个业务的简单解释这个业务的简单解释这个业务的简单解释',
                icon: "icon-shujudaoru",
                id: 43,
                isUse: 1,
                parentId: 1,
                permission: "",
                rank: 1,
                seq: 4,
                type: "1",
            }, {
                cUrls: "accountSet",
                url: 'riskSupplement',
                level: 2,
                permissionName: "新增数据模式二",
                description: '这个业务的简单解释这个业务的简单解释这个业务的简单解释这个业务的简单解释',
                icon: "icon-biaoqianguanli",
                id: 23,
                isUse: 1,
                parentId: 1,
                permission: "",
                rank: 1,
                seq: 2,
                type: "1",
            }, {
                cUrls: "personalCenter",
                url: 'entLabel',
                level: 2,
                permissionName: "树形结构",
                description: '这个业务的简单解释这个业务的简单解释这个业务的简单解释这个业务的简单解释',
                icon: "icon-fengxianjingqingbiao",
                id: 43,
                isUse: 1,
                parentId: 1,
                permission: "",
                rank: 1,
                seq: 4,
                type: "1",
            }
        ]
    },{
        cUrls: "",
        url: 'riskRecognize',
        level: 1,
        permissionName: "大模块二",
        permission: "",
        rank: 1,
        seq: 7,
        type: "1",
        icon: "icon-fengxianshibie",
        id: 7,
        isUse: 1,
        parentId: null,
        child: [
            {
                cUrls: "roleSet",
                url: 'riskReview',
                level: 2,
                permissionName: "菜单一",
                description: '这个业务的简单解释这个业务的简单解释这个业务的简单解释这个业务的简单解释',
                icon: "icon-fengxianyujingbaogao",
                id: 36,
                isUse: 1,
                parentId: 1,
                permission: "",
                rank: 1,
                seq: 3,
                type: "1",
                child:[
                    {
                        url:'reviewList',
                        permissionName:'风险审核列表',
                        child:[
                            {
                                url:'reviewApproval',
                                permissionName:'审核',
                            }
                        ]
                    }
                ]
            }
           
        ]
    }



]
export const permission = permissionStr ? mock : mock;