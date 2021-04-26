import img from '../../assets/images/map-icon.png'
import choosedImg from '../../assets/images/pointChoosed.svg'
import riskOne from '../../assets/images/map-icon.png'
import riskTwo from '../../assets/images/map-icon.png'
import riskThree from '../../assets/images/map-icon.png'
import riskChoosed from '../../assets/images/riskChoosed.svg'
import {zhejiang} from "./lngLat/amap.zhejiang"
import {zhoushan} from "./lngLat/amap.zhoushan"
import {jiaxing} from "./lngLat/amap.jiaxing"
import {ningbo} from "./lngLat/amap.ningbo"
import {taizhou} from "./lngLat/amap.taizhou"
import {wenzhou} from "./lngLat/amap.wenzhou"
import {lishui} from "./lngLat/amap.lishui"
import {hangzhou} from "./lngLat/amap.hangzhou"
import {shaoxing} from "./lngLat/amap.shaoxing"
import {huzhou} from "./lngLat/amap.huzhou"
import {jinhua} from "./lngLat/amap.jinhua"
import {quzhou} from "./lngLat/amap.quzhou"
const mapper = {
    "浙江省":zhejiang,
    "舟山市":zhoushan,
    "嘉兴市":jiaxing,
    "宁波市":ningbo,
    "台州市":taizhou,
    "温州市":wenzhou,
    "丽水市":lishui,
    "杭州市":hangzhou,
    "绍兴市":shaoxing,
    "湖州市":huzhou,
    "金华市":jinhua,
    "衢州市":quzhou
}
const processMapper={

}
const district = new AMap.DistrictSearch({
    level:'province',
    showbiz:false,
    extensions:'all',
    subdistrict:3
});
export const sytleID = '140c5762696519e9d4c23cbcc1d74d60'
export const regionLevel = ['district','city','province']
let  map = {};

//初始化背景地图
export const mapInit = (id='mapContainer', opts = {}) => {
    if(Object.keys(map).length === 0){
        map =  new AMap.Map(id, Object.assign({
            mapStyle: 'amap://styles/140c5762696519e9d4c23cbcc1d74d60',
            zoom: 8,
            center: [119.412427, 29.303573],
            pitch:50,
            viewMode: '3D',
            features: ['bg', 'road'],
        }, opts));
        // console.log(map)
    }
    return map;
}
function createLngLat(polyline){
    let result = []
    let arr = polyline.split("|").filter(v=>v.length);
    let arr1 = arr.map(v=>{
        return v.split(";").map(v1=>v1.split(",").map(v2=>(v2-0)))
    })
    result = arr1.filter(v=>v.length>300)

    return result;
}

function createAMapResponse(areaName){

    // let {adcode,center,districts,name,level,polyline} = mapper[areaName].districts[0];
    // console.log(districts)
    //  let temp = {
    //     districtList:[{
    //         adcode:adcode,
    //         center:center.split(",").map(v=>(v-0)),
    //         districtList:districts,
    //         boundaries:createLngLat(polyline),
    //         name:name,
    //         level:level
    //     }]
    // }
    let districts =  mapper[areaName].districts;
    let temp = {districtList:processLngLat(districts)};
    processMapper[areaName] = temp;
    return processMapper[areaName]
}
function processLngLat(districts){
    return  districts.map(v=>{
        return {
            adcode:v.adcode,
            center:v.center.split(",").map(v=>(v-0)),
            districtList:processLngLat(v.districts),
            boundaries:(v.polyline ? createLngLat(v.polyline) :[]),
            name:v.name,
            level:v.level
        }
    })
   
}
export const getBounds = ({searchName,opts})=>{
    if(opts){
        opts.level && district.setLevel(opts.level);
        opts.subdistrict && district.setSubdistrict(opts.subdistrict);
    }

    return new Promise((resolve,reject)=>{
        if(processMapper[searchName]){
            resolve(processMapper[searchName])
        }else if( mapper[searchName]){
            resolve(createAMapResponse(searchName))
        }else{
            district.search(searchName,function(status,result){
                console.log(result)
                if(status == "complete"){
                    resolve(result)
                }else{
                    reject(result)
                }
            })
        }
        
    //    debugger
        
    })
    
}
let zhejiangInfo = {};
async function initZhejInfo(){
    let rtn = await getBounds({searchName:'浙江省',level:'province'}).then(res=>res.districtList[0])
    return rtn
}
//获取浙江边界以及下属行政信息
export  const getZheJBounds = ()=>{
    if(Object.keys(zhejiangInfo).length === 0){
        zhejiangInfo = initZhejInfo()
    }
    // console.log(zhejiangInfo)
    return zhejiangInfo
}
// 渲染城市名
//渲染边界线
export const renderPolyline = (bounds,{strokeColor,strokeWeight}={strokeColor :'#FFFEC43B',strokeWeight:4})=>{
    if(!bounds || (bounds && bounds.length == 0)){
        return ;
    }
    let arr = []
    for (var i = 0, l = bounds.length; i < l; i++) {
            let p = new AMap.Polyline({
            path:bounds[i],
            
         
        })
        arr.push(p)
    }
    var overlayGroup = new AMap.OverlayGroup(arr);
    overlayGroup.setOptions({
        strokeColor:strokeColor,
        strokeWeight:strokeWeight,
    });
    map.add(overlayGroup);
            //添加高度面
    // var object3Dlayer = new AMap.Object3DLayer({zIndex:1});
    // map.add(object3Dlayer)
    // var height = -20000;
    // var color = '#89FFFBff';//rgba
    // var wall = new AMap.Object3D.Wall({
    //     path:bounds,
    //     height:height,
    //     color:color
    // });
    // wall.transparent = true
    // object3Dlayer.add(wall)
}
const filterCode = ["330903","330205",'330106']//普陀区 江北区 西湖区
export const filterBounds = (res)=>{
    let districtList = null,filterLen = 300;
    if(res.districtList.length>1){
        districtList =  res.districtList.filter(v=>filterCode.indexOf(v.adcode)>-1)[0]
    }else{
        districtList = res.districtList[0]
    }
    // if(districtList.name == "舟山市")filterLen=300;
    let arr =  districtList.boundaries.filter(v=>{
        return v.length >filterLen
    })
    // console.log(districtList)
    return {
        bounds:arr,
        name:districtList.name,
        adcode:districtList.adcode
    }
    
}
// let preClearPolygons = [];
// let preClearpolylines = [];
/**
 * 渲染行政覆盖物
 * citys 城市名称数组：[]
 * opts
 * usePolyline : 是否使用边界线，默认true
 * polyLineOpts : 边界线配置项
 * polygonOpts : 覆盖物配置项
 * mapClearFlag:是否清空所有覆盖物标志，默认为空清空所有
 *  */
export const rendPolygon = ({citys,opts,usePolyline=true,polyLineOpts={},polygonOpts={},mapClearFlag=true}
        ={
            citys,
            opts,
            usePolyline,
            polyLineOpts,
            polygonOpts
           
        }
    )=>{
    // map.remove(preClearPolygons);
    // map.remove(preClearpolylines);
    // map.remove(removeMarker)
    // preClearPolygons = [];
    // preClearpolylines = [];
    if(mapClearFlag){
        map.clearMap();
    }
    let polygons = [];
    return Promise.all(citys.map(v=>{//获取边界线经纬度
        return  getBounds({
              searchName:v,
                opts
          })
    })).then(res=>{//过滤边界线经纬度
        return res.map(v=>{
            return filterBounds(v)
        })
    }).then(res=>{//绘制polygon和polyline
       
        res.map(({bounds,name,adcode})=>{
            let v = bounds;
            for (let i = 0, l = v.length; i < l; i++) {
                let opts = {
                    strokeWeight: 1,
                    path: v[i],
                    fillOpacity: 0.1,
                    fillColor: '#33FFFA',
                    strokeColor: '#FFFEC43B',
                    strokeOpacity:0.3
                }
                Object.assign(opts,polygonOpts);
                opts.strokeOpacity =  (usePolyline? 0.3 : 0)
                opts.extData = {areaName:name,adcode:adcode,...opts.extData}
                //生成行政区划polygon
                let polygon = new AMap.Polygon(opts);
                polygons.push(polygon);
            }
            // for (let i = 0, l = v.length; i < l; i++) {
            //     // if(usePolyline){
            //     //     // console.log(v[i])
            //     //     let opts = {
            //     //         path:v[i],
            //     //         strokeColor:'#FFFEC43B',
            //     //         strokeWeight:2,
            //     //         strokeOpacity:.3,
            //     //         map:map
            //     //     }
            //     //     Object.assign(opts,polyLineOpts);
            //     //     new AMap.Polyline(opts)
            //     // }
                
                
                
                
            // }

            
        })
        // preClearPolygons = [...polygons];

       map.add(polygons)
       return polygons;
    })
 
    // return polygons;
}
/**
 * 风险概览图标散点
 * map：地图,
 * pointClick：散点点击事件
 * pointDtaa：散点数据
 *  */
let iconCircle=[];
export const iconPoint = (map,pointClick,pointData)=>{
    if(iconCircle){
        iconCircle.forEach(current=>{
            current.setMap(null);
            current = null;
        })
    }
    var startIcon = new AMap.Icon({
        size: new AMap.Size(40,50),// 图标尺寸
        image: img,// 图标的取图地址
        imageSize: new AMap.Size(40,50),// 图标所用图片大小
        imageOffset: new AMap.Pixel(0, 0)// 图标取图偏移量
    });
    pointData.forEach(current => {
        let singleIconCircle = new AMap.Marker({
            position: new AMap.LngLat(current.lng, current.lat),
            icon: startIcon,
            offset: new AMap.Pixel(30, 0)
        });
        singleIconCircle.setMap(map);
        iconCircle.push(singleIconCircle);
        pointEvent(map,'riskOverview',singleIconCircle,current,pointClick);
    })
    // map.add(iconCircle);
}
/**
 * 企业风险散点
 * map：地图
 * pointClick：散点点击事件
 * pointData：散点数据
 *  */
let circle=[];
function getLevel(score){
    let rtn;
    if(score==3){
        rtn = 150
    }else if(score==2){
        rtn = 50
    }else if(score==1){
        rtn = 10
    }
    return rtn
}
function getOpacity(score){
    let rtn;
    if(score==3){
        rtn = 0.8
    }else if(score==2){
        rtn = 0.4
    }else if(score==1){
        rtn = 0.2
    }
    return rtn
}
export const pointShow = (map,pointClick,pointData) =>{
    if(circle){
        circle.forEach(current=>{
            current.setMap(null);
            current = null;
        })
    }
    pointData.forEach(current => {
        console.log(current)
        let c = new AMap.Circle({
            radius:getLevel(current.riskLevels)*100,
            center:new AMap.LngLat(current.lng, current.lat),
            strokeColor:'#F9E85B',
            fillColor:'#F9E85B',
            strokeWeight:1,
            fillOpacity:getOpacity(current.riskLevels)
        })
        // var entIcon = new AMap.Icon({
        //     size: new AMap.Size(40, 60),
        //     image: current.riskLevels==5?riskOne:(current.riskLevels==4?riskTwo:riskThree),
        //     imageSize: new AMap.Size(40, 60),
        //     imageOffset: new AMap.Pixel(0, 0)
        // });
        // let singleCircle = new AMap.Marker({
        //     position: new AMap.LngLat(current.lng, current.lat),
        //     icon: entIcon,
        //     offset: new AMap.Pixel(0, 0)
        // });
        // singleCircle.setMap(map);
        circle.push(c);
       
        // pointEvent(map,'enterpriseRisk',singleCircle,current,pointClick);
    })
    let overLayGroup = new AMap.OverlayGroup(circle);
    overLayGroup.setMap(map)
    // map.add(circle);
}
//风险概览、企业风险信息窗体
function createInfoWindow(ev) {
    let str1=``,str2=``,str3=``;
    ev.warnList && ev.warnList.forEach((current,i)=>{
        if(i > 2) return;
        if(i>=2){
            str1+=`<span >...</span>`;
            return
        }
        str1+=`<span >${current.themeName + current.warnLevel}</span>`
    })
    for(let i=0;i<ev.riskLevels;i++){
        str2+=`<i class='iconfont icon-shandian' style='color:#FFAB01'></i>`
    }
    for(let i=0;i<3-ev.riskLevels;i++){
        str3+=`<i class='iconfont icon-shandian' style='color:rgba(0,255,255,0.2)'></i>`
    }

    var info=`
        <div class='ent-row custom-info'>
            <div class='ent-name'>`+ev.entName+`</div>
            <div class='risk-label'>`+str1+`</div>
            <div class='risk-content'>
                <span>风险指数 <span class='risk-index'>`+parseFloat(ev.score).toFixed(1)+`</span></span>
                <span>风险等级 `+str2+str3+`</span>
            </div>
        </div>
    `;
    return info;
}
/**
 * 散点事件
 * map：地图
 * type：不同页面设置不同样式
 * pointClick：散点点击事件
 * singleCircle：当前散点
 * current：点前点击的散点数据
 *  */
let singnalCity=null;
function pointEvent (map,type,singleCircle,current,pointClick) {
    singleCircle.on('mouseover',function(){
        var infoWindow = new AMap.InfoWindow({
            isCustom: true,  //使用自定义窗体
            content: createInfoWindow(current),
            offset: type=='riskOverview'?new AMap.Pixel(30, 0):(type=='enterpriseRisk'?new AMap.Pixel(-6, -10):new AMap.Pixel(14, 0)),
        });
        infoWindow.open(map,[current.lng, current.lat]);
        // if(type=='riskOverview'){
        //     var startIcon = new AMap.Icon({
        //         size: new AMap.Size(110, 44),
        //         image: choosedImg,
        //         imageSize: new AMap.Size(110, 44),
        //         imageOffset: new AMap.Pixel(0, 0)
        //     });
        //     singleCircle.setIcon(startIcon);
        //     singleCircle.setOffset(-50,-50);
        // }
        // if(type=='enterpriseRisk'){
        //     var entIcon = new AMap.Icon({
        //         size: new AMap.Size(70, 80),
        //         image: riskChoosed,
        //         imageSize: new AMap.Size(70, 80),
        //         imageOffset: new AMap.Pixel(-10, -10)
        //     });
        //     singleCircle.setIcon(entIcon);
        //     renderSingnalPolygon(map,singleCircle)
        // }
    })
    singleCircle.on('mouseout', function () {
        map.clearInfoWindow();
        // if(type=='riskOverview'){
        //     var startIcon = new AMap.Icon({
        //         size: new AMap.Size(100, 34),
        //         image: img,
        //         imageSize: new AMap.Size(100, 34),
        //         imageOffset: new AMap.Pixel(0, 0)
        //     });
        //     singleCircle.setIcon(startIcon);
        // }
        // if(type=='enterpriseRisk'){
        //     var entIcon = new AMap.Icon({
        //         size: new AMap.Size(50, 60),
        //         image: current.riskLevel==5?riskOne:(current.riskLevel==4?riskTwo:riskThree),
        //         imageSize: new AMap.Size(50, 60),
        //         imageOffset: new AMap.Pixel(0, 0)
        //     });
        //     singleCircle.setIcon(entIcon);
        //     map.remove(singnalCity)
        // }
    });
    singleCircle.on('click', function (ev) {
        pointClick(current)
        map.clearInfoWindow();
    });
}
/**
 * 根据散点位置高亮当前城市
 * map:地图
 * singleCircle：散点
 */
function renderSingnalPolygon(map,singleCircle){
    map.plugin('AMap.Geocoder', function() {
        var geocoder = new AMap.Geocoder({
          // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
          city: '330000'
        })
        var lnglat = [singleCircle.getPosition().lng, singleCircle.getPosition().lat]
        geocoder.getAddress(lnglat, function(status, result) {
          if (status === 'complete' && result.info === 'OK') {
                // result为对应的地理位置详细信息
                // console.log(result);
                let opts = {
                    level:'city',
                    subdistrict:1
                }
                rendPolygon({
                    citys:[result.regeocode.addressComponent.city],
                    opts,
                    mapClearFlag:false,
                    usePolyline:false,
                    polygonOpts:{
                        strokeWeight: 3,
                        fillOpacity: 0.8,
                        fillColor: '#00FFFB',
                        strokeColor: '#00FFFB',
                        strokeOpacity: 0.8
                    }
                }).then(res=>{
                    singnalCity=res;
                })
            }
        })
    })
}