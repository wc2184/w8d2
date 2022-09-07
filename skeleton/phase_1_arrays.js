Array.prototype.uniq = function () {
  let newArray = [];
  this.forEach((el) => {
    if (!newArray.includes(el)) {
      newArray.push(el);
    }
  });
  return newArray;
};

Array.prototype.twoSum = function () {
  let result = [];
  // this.forEach( function (el, idx) {
    for(let a = 0; a < this.length; a++) {
      for(let b = 0; b < this.length; b++) {
        if (b !== a && b < a && this[b] + this[a] === 0) {
          result.push([b, a])
        }
      }
  }
  // } 
  // )
  return result
}


Array.prototype.transpose = function () {
  let result = [];
  for (let i = 0; i < this[0].length; i++){
    let line = [];
    for (let j = 0; j < this.length; j++){
      line.push(this[j][i])
    }
    result.push(line)
  }
  return result 
}

