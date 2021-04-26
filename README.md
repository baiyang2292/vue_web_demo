# Vue项目模板

## 项目说明

| 项目名称 | 描述 |
| -------- | -------- |
|  |


## 目录结构
```
├── config                      //项目生成代码模板等配置目录
│   ├── checkSameExport.js
│   ├── config.file.js
│   ├── create                  //创建对应目录下模板的文件，通过node createGov/Ent/H5.js 或者 node create gov 创建，会根据fileName.js里面创建的对应目录去生成
│   │   ├── create.js
│   │   ├── createEnt.js
│   │   ├── createGov.js
│   │   ├── createH5.js
│   │   └── createYxjc.js
│   ├── createFile.js           //创建模板的逻辑代码
│   ├── createTemp.js           //创建模板的逻辑代码
│   ├── fileName.js             //生成模板文件的入口文件和打包的入口文件需要用到
│   └── template                //用于生成
│       └── gov
│           ├── axios.template
│           ├── html.template
│           ├── js.template
│           ├── less.template
│           ├── router.template
│           └── vue.template
├── public
│   └── favicon.ico
├── src
│   ├── assets                  //静态资源 例如字体，图片等
│   │   ├── font
│   │   └── images
│   ├── common                  //全局通用信息配置目录
│   │   ├── amap                //高德地图相关通用部分
│   │   │   ├── amap.js
│   │   │   ├── amapUtils.js
│   │   │   └── lngLat
│   │   ├── constant            //常量通用配置
│   │   │   ├── commonChart.js
│   │   │   ├── constant.js
│   │   │   ├── index.js
│   │   │   ├── mock.js
│   │   │   └── sysCode.js
│   │   ├── interface           //接口统一配置
│   │   │   ├── api             //各个模块接口
│   │   │   └── axios.decoration.js     //axios 二次封装
│   │   ├── less                //less文件通用部分
│   │   │   ├── base.less
│   │   │   ├── h5Common.less
│   │   │   ├── pcCommon.less
│   │   │   └── reset.less
│   │   ├── mixins              //vue 混入通用部分
│   │   ├── permission.js       //权限 列表
│   │   └── utils               //工具类
│   ├── components              //组件库
│   │   ├── BasePage.vue
│   │   ├── Breadcrumb.vue
│   │   ├── Card.vue
│   │   ├── EmptyData.vue
│   │   ├── Nav
│   │   │   └── nav.vue
│   │   ├── PDFViewer.vue
│   │   ├── SearchItem.vue
│   │   ├── SearchLayout.vue
│   │   ├── YRadio
│   │   ├── YTimeLine
│   │   ├── footer.vue
│   │   ├── header.vue
│   │   └── main.vue
│   ├── demo                     //（gov/ent/h5）某个端的基础目录
│   │   ├── dataCenter
│   │   ├── login
│   │   ├── riskRecognize
│   │   └── warningVisualized
│   ├── store                   //vue store目录
│   │   ├── dictionary
│   │   └── permission
│   └── store.js                //vue store统一
├── static                      //第三方插件目录
│   └── plugins
├── jest.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── babel.config.js
└── vue.config.js
```
