import { FunctionExpression } from "@babel/types";

/**
 * @description Check if the passed variable is indeed a function
 * @param {FunctionExpression} functionToCheck
 * @returns {Boolean} 
 */
export const isFunction = (functionToCheck) => functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'

/**
 * @description return the userAgent (navigator's name) of the current navigator 
 * @returns {String}
 */
export const navigatorCheck = () => {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1) {
        return 'Opera'
    } else if (navigator.userAgent.indexOf("Chrome") !== -1) {
        return 'Chrome'
    } else if (navigator.userAgent.indexOf("Safari") !== -1) {
        return 'Safari'
    } else if (navigator.userAgent.indexOf("Firefox") !== -1) {
        return 'Firefox'
    } else if ((navigator.userAgent.indexOf("MSIE") !== -1) || (!!document.documentMode === true)) //IF IE > 10
    {
        return 'IE'
    } else {
        return 'unknown'
    }
    
};