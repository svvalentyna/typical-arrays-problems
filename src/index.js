
exports.min = function min (array) {
  if(array !== undefined && array.length){
    let minElem = array[0];
    for(let i = 0; i <= array.length - 1; i++){
      //console.log(array[i])
      if(array[i] < minElem){
        minElem = array[i];
      }
    }
    return minElem;
  }
    return 0;
  
}

exports.max = function max (array) {
  if(array !== undefined && array.length){
    let maxElem = array[0];
    for(let i = 0; i <= array.length - 1; i++){
      //console.log(array[i])
      if(array[i] > maxElem){
        maxElem = array[i];
      }
    }
    return maxElem;
  }
    return 0;
  
}

exports.avg = function avg (array) {
  if(array !== undefined && array.length){
    let sumArray = 0;
    let arrayItemsCount = array.length;
    for(let i = 0; i <= array.length - 1; i++){
      sumArray += array[i];
    }
    return sumArray/arrayItemsCount;
  }
  return 0;
}
