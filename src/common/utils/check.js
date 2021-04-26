// 所有的验证方式都写在这

// 表单验证方式，提示文案统一

// 非空，必填
export const notEmpty = (str) => ({ required: true, message: "请输入" + str, trigger: "blur" });

// 不能有空格
export const noBlank = () => ({ pattern: /^(\S)+$/, message: "不能有空格", trigger: "blur" })

// 必须为数字
export const isNumberBetween = (min, max) => {
    let reg = new RegExp(`^(\d){${min},${max}}$`);
    return ({ pattern: /^(\d){}$/, message: `必须为${min}至${max}的数字`, trigger: "blur" })
}

// 手机号
export const isPhone = () => ({ pattern: /^1[34578]\d{9}$/, message: "不是合法的手机号", trigger: "blur" })

// 链接
export const isHttp = (str) => ({  required: true, pattern:/^(http|https)\S*/, message: "开头必须是http或者https", trigger: "blur" })



/**
 * 验证是不是数字
 * @param val
 * @returns {boolean}
 */
export const isNumber = (val) => {
    if(val === null || val === undefined || Math.abs(val) === Infinity) return false;
    return !isNaN(parseFloat(val-0));
};

/**
 * 验证正整数
 * @param num
 * @returns {boolean}
 */
export const isPosInteger = (num) => {
    num = num - 0;
    return num !== 0 && /^[0-9]+$/.test(num);
};

/**
 * 验证手机号
 * @param phone
 * @returns {boolean}
 */
export const checkPhone = (phone) => {
    return /^1[3,4,5,7,8][0-9]{9}$/.test(phone);
};

export const checkTelPhone =(tp)=>{
    return /^(0\d{2,3}(-|\s|)\d{7,8})$/.test(tp);
};

//验证密码6-16位，区分大小写
export const checkPassword = (password) =>{
    // return /^(\d{6,16})|((?! )(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9_]{6,16})$/.test(password)
    return /^(?=.*[a-zA-Z])(?=.*[\d])[\w\W]{6,16}$/.test(password)


};

export const isEmptyString = (str) =>{
    // return /^(\d{6,16})|((?! )(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9_]{6,16})$/.test(password)
    return !str || str.trim().length === 0


};

/**
 * 验证字符串中是否包含字母
 * @param str
 * @returns {boolean}
 */
export const hasLetter = (str) => {
    return /[a-z]/i.test(str+'');
};

/**
 * 判断字符串是否以数字开头
 * @param str
 * @returns {boolean}
 */
export const isStartWithNum = (str) => {
    return /^[1-9]/.test(str);
};
