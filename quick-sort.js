
// https://www.youtube.com/watch?v=SLauY6PpjW4
// https://www.youtube.com/watch?v=ZYVY4sSRIIs

let quicksort = (array) => {
    //base case
    if(array.length <= 1) return array;
    //now find swap position and value
    var swapPos = Math.floor((array.length - 1)/ 2);
    var swapValue = array[swapPos], less = [], more = [];
    array = array.slice(0, swapPos).concat(array.slice(swapPos + 1));
    for(var i = 0; i < array.length; i++) {
      if(array[i] < swapValue) {
        less.push(array[i]);
      } else {
        more.push(array[i])
      }
    }
    return (quicksort(less)).concat([swapValue], quicksort(more));
  }
  
  
  
  quicksort([15, 3, 2, 1, 9, 5, 7, 8, 6])