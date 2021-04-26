/**
 * 如果字符串为空 null undefined ，则返回placeholder
 * @param str
 * @param placeholder
 * @returns {*|string}
 */
export const toHtmlStr = (str,placeholder='') => {
    if(str === undefined || str === null || str==='null'){
        return placeholder;
    }else if(str === 999999999){
        return `<span style="font-size:18px;">∞</span>`;
    }else if(str === 'null'){
        return 'null';
    }
    return str;
};
