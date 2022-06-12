/**
 * 判断字符串,数组,对象是否为空或长度为0 
 */
function isEmpty(cellValue: any) {
    if (cellValue === null || cellValue === undefined || cellValue === '') {
        return true
    }
    if (cellValue instanceof Array) {
        return cellValue.length == 0;
    }
    if (cellValue instanceof Object) {
        return Object.keys(cellValue).length == 0;
    }
    return false;
}

export default isEmpty