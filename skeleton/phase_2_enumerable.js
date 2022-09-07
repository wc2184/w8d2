let myMethod = function(num) {
    return (num + 2)
}
Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i])
    }
}



Array.prototype.myMap = function(callback) {
    let result = []
    // this.myEach(element => {
    //     result.push(callback(element))
    // })
    let func = function(element) {
        result.push(callback(element))
    }
    this.myEach(func)
    return result
}