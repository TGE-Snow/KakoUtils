function isEmpty(cellValue) {
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

module.exports = isEmpty;