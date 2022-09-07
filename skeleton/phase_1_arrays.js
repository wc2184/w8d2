Array.prototype.uniq = function () {
  let newArray = [];
  this.forEach((el) => {
    if (!newArray.includes(el)) {
      newArray.push(el);
    }
  });
  return newArray;
};
