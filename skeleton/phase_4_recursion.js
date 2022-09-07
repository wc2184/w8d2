let range = function(start, end) {
if (start === end){
    return [end]
}
return [start].concat(range(start + 1, end))
}

let sumrec = function(arr) {
    if (arr.length === 1){
        return arr[0]
    }
    return arr[0] + (sumrec(arr.slice(1)))
    }
    
let exponent = (base, exp) => {
    if (exp === 0){
        return 1
    }
    return base * exponent(base, exp - 1)
}

let fibonacci = (num) => {
    if (num === 1) {
        return [0]
    }
    if (num === 2) {
        return [0, 1]
    }
    return [fibonacci(num - 1)[fibonacci(num - 1).length - 1] + fibonacci(num - 1)[fibonacci(num - 1).length - 2]].concat(fibonacci(num - 1))
}