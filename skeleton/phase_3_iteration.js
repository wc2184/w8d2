Array.prototype.bubbleSort = function () {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    let i = 0;
    while (i < this.length - 1) {
      if (this[i] > this[i + 1]) {
        // this[i], (this[i + 1] = this[i + 1]), this[i];
        // let temp = this[i];
        // this[i] = this[i + 1];
        // this[i + 1] = temp;
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        sorted = false;
      }
      i += 1;
    }
  }
  return this;
};

String.prototype.substrings = function() {
    let result = []
    for( let i = 0; i < this.length; i++){
        for( let j = i; j < this.length; j++){
            result.push(this.slice(i,j + 1))
        }
    }
return result
}


