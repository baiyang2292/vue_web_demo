
//文案统一配置
export const constant = {
    PERMISSION :'permission',
    USERINFO : 'userInfo',
    TOKEN : 'token',
    YXJC : 'YXJC',
    FFHJ : 'FFHJ',
    GZYQ : 'GZYQ',
    QYHX : 'QYHX',
    SERIVCEPATH:'SERIVCEPATH',
    test: 'test',
};

const aligns = ['left','center','right']
const sizes = ['large','medium','small','mini']
//默认表单元素 size 
export const defaultUISizes = sizes[2];
//分页器位置
export const defaultPaginationAlign = aligns[2]; 

export const pageSizes = [
    10,20,30,40
]
export const paganationLayout = "total, sizes, prev, pager, next, jumper"

export const LISTOPTION = {
    COVER: 0,
    PUSH: 1
}


export const warningVisualized = [
    {
        cUrls: "",
        url: 'riskOverview',
        level: 1,
        name: "风险概览",
        permission: "",
        rank: 1,
        seq: 7,
        type: "1",
        icon: "icon-fengxiangailan",
        id: 7,
        isUse: 1,
        parentId: null,
    }, {
        cUrls: "",
        url: 'enterpriseRisk',
        level: 1,
        name: "企业风险",
        permission: "",
        rank: 1,
        seq: 7,
        type: "1",
        icon: "icon-qiyefengxian",
        id: 7,
        isUse: 1,
        parentId: null,
    }, {
        cUrls: "",
        url: 'regionalRisk',
        level: 1,
        name: "区域风险",
        permission: "",
        rank: 1,
        seq: 7,
        type: "1",
        icon: "icon-quyufengxian",
        id: 7,
        isUse: 1,
        parentId: null,
    }, {
        cUrls: "",
        url: 'industryRisk',
        level: 1,
        name: "行业风险",
        permission: "",
        rank: 1,
        seq: 7,
        type: "1",
        icon: "icon-hangyefengxian",
        id: 7,
        isUse: 1,
        parentId: null,
    },
]