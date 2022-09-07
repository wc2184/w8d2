let myMethod = function(num) {
    return num
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
    this.myEach(function(element) {
        result.push(callback(element))
    })
    return result
}

Array.prototype.myReduce =function(callback, initialValue = this[0]){
    let total = initialValue
    if (initialValue){
    this.myEach(el => {
        total += callback(el)
    })
}
    else {
        this.slice(1).myEach(el => {
            total += callback(el)
        })
    }
    return total
}

