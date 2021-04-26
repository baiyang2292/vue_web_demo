//获取级联选择器的label值
export function getCascaderLabel(data,orignData){
    if(!data){
        return orignData=[];
    }
    orignData.push(data.label);
    if(!data.parent){
        return orignData.reverse();
    }else{
        getCascaderLabel(data.parent,orignData);
    }
}
