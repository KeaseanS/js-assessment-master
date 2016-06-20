exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    if(typeof item === 'undefined' || typeof arr === 'undefined'){
      return -1;
    }

    let targetedArray= arr;
    let targetedItem = item;
    const TARGETARRAYLENGTH = targetedArray.length;

    for(let x = 0; x < TARGETARRAYLENGTH; x++){
      let item = targetedArray[x];
      if(item === targetedItem){
          return x;
      }
    }

    return -1;
  },

  sum: function(arr) {
    let targetedArray = arr;
    const TARGETARRAYLENGTH = targetedArray.length;
    let sum = 0;
    for(let x = 0; x < TARGETARRAYLENGTH; x++){
      let item = targetedArray[x];
      if(!isNaN(parseFloat(item)) == true &&  isFinite(item)){
          sum += targetedArray[x];
      }
    }

    return sum;

  },

  remove: function(arr, item) {
    let targetedArray= arr;
    let targetedItem = item;
    const TARGETARRAYLENGTH = targetedArray.length;
    let newArray = [];

    for(let x = 0; x < TARGETARRAYLENGTH; x++){
      let item = targetedArray[x];
      if(item !== targetedItem){
          newArray.push(item)
      }
    }

    return newArray;

  },

  removeWithoutCopy: function(arr, item) {
    let targetedArray= arr;
    let targetedItem = item;
    const TARGETARRAYLENGTH = targetedArray.length;
    let currentItem = 0;

    while(currentItem < TARGETARRAYLENGTH){
      let item = targetedArray[currentItem];
      if(item === targetedItem){
        targetedArray.splice(currentItem,1);
        currentItem = 0;
      }else{
        currentItem++;
      }
    }

    return targetedArray;
  },

  append: function(arr, item) {
    let targetedArray= arr;
    let targetedItem = item;
    targetedArray.push(targetedItem);
    return targetedArray;
  },

  truncate: function(arr) {
    let targetedArray= arr;
    targetedArray.pop();
    return targetedArray;
  },

  prepend: function(arr, item) {
    let targetedArray= arr;
    let targetedItem = item;
    targetedArray.unshift(targetedItem);
    return targetedArray;
  },

  curtail: function(arr) {
    let targetedArray= arr;
    targetedArray.shift();
    return targetedArray;
  },

  concat: function(arr1, arr2) {
    let array1 = arr1;
    let array2 = arr2;
    let newArray;
    newArray = array1.concat(array2);
    return newArray; 
  },

  insert: function(arr, item, index) {
    let targetedArray= arr;
    let targetedItem = item;
    targetedArray.splice(index, 0, targetedItem);
    return targetedArray;
  },

  count: function(arr, item) {
    let targetedArray= arr;
    let targetedItem = item;
    const TARGETARRAYLENGTH = targetedArray.length;
    let count = 0;

    for(let x = 0; x < TARGETARRAYLENGTH; x++){
      let item = targetedArray[x];
      if(item === targetedItem){
          count++
      }
    }

    return count;
  },

  duplicates: function(arr) {
    let targetedArray= arr.sort();
    const TARGETARRAYLENGTH = targetedArray.length;
    let currentIndex = 0;
    let newArray = [];

    while(currentIndex < TARGETARRAYLENGTH){

      let count = 0;
      let currentArrayItem = targetedArray[currentIndex];

      for(let x = 0; x < TARGETARRAYLENGTH; x++){
        let item = targetedArray[x];
        if(item == currentArrayItem){
            count++;
        }
      }

      if(count > 1){
        let notFound = true;
        for(let x = 0, y = newArray.length; x < y; x++){
        if(currentArrayItem == newArray[x]){
            notFound = false;
          }
        }

        if(notFound){
          newArray.push(currentArrayItem);
        }
      }

      currentIndex++

    }

    return newArray;
  },

  square: function(arr) {
    let targetedArray= arr;
    let newArray = [];

    targetedArray.forEach(
      function(currentItem){
        newArray.push(currentItem*currentItem);
      }
    );

    return newArray;
  },

  findAllOccurrences: function(arr, target) {
    let targetedArray= arr;
    let targetedItem = target;
    const TARGETARRAYLENGTH = targetedArray.length;
    let occuranceArray = [];

    for(let x = 0; x < TARGETARRAYLENGTH; x++){
      let item = targetedArray[x];
      if(item === targetedItem){
          occuranceArray.push(x)
      }
    }

    return occuranceArray;
  }
};
