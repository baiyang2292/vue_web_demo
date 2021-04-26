export function hexToRgb(hex, alpha = 0.1) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha})` : '';

}

/**
 * 
 * @param {字符串} str 
 * @param {分隔符} exp 
 */
export function stringSplit(str, exp = ',') {
    if(!str || typeof str !== 'string'){
        return []
    }
    return str.split(exp);
}