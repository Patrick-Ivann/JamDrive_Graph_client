import { FunctionExpression, file } from "@babel/types";

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

/**
 * Promise wrapper to handle Error with ease
 * @param {Promise} promise 
 * @returns {Promise}
 */
export default function to(promise) {
    return promise.then(data => {
       return [null, data];
    })
    .catch(err => [err]);
 }

/**
 * 
 * @param {String} fileTitle
 * @returns {Boolean} 
 */
export const isFileTypeValid = fileTitle => ["docx","doc"].includes( fileTitle.split(".")[1]) 
/**
 * 
 * @param {String} fileTitle
 * @returns {Boolean} 
 */
export const isFileRelevant = fileTitle => fileTitle.toLowerCase().search(/prosit|ressource/);

/**
 * 
 * @param {String} fileTitle 
 * @returns {Object} unnamed
 */
export const fileNameExtractor = fileTitle =>{
    console.log(fileTitle)
    let clef =  fileTitle.split("_")[1];
    let nom  = fileTitle.split("_")[2];
    let spec = (fileTitle.split("_")[3]).split(".")[0]; 
    return {clef : clef, nom : nom, spec : spec}
};

/**
 * 
 * @param {String} clef
 * @returns {Boolean}  
 */
export const isFileProsit = clef => clef.toLowerCase() === "prosit";
/**
 * @param {String} spec
 * @returns {Boolean} 
 */
export const isFilePrositAller = spec => spec.toLowerCase() === "aller";
/**
 * 
 * @param {String} spec
 * @returns {Boolean} 
 */
export const isFileRessourceEleve = spec => spec.toLowerCase() === "eleve"; 



/**
 * 
 * @param {String} currentProsit 
 * @param {String} filterWord 
 * @returns {Int} index
 */
export const filterPrositByNomProsit = (currentProsit,filterWord) => currentProsit.nomProsit.toString().toLowerCase().indexOf(filterWord) > -1;
