let binarySearch = (searchList, value) => {
    let arrayPath = [];
  
    //set initial L - M - R
    let left = 0;
    let right = searchList.length - 1;
    let middle = Math.floor(right / 2);
  
    //if first comparison finds value
    if (searchList[middle] == value) {
      arrayPath.push(searchList[middle]);
      return arrayPath;
    }
  
    while (searchList[middle] !== value) {
      //add to output array
      arrayPath.push(searchList[middle]);
  
      //not found
      if (right < left) {
        return 'Value Not Found';
      }
      // value is in left or right portion of array
      // update L - M - R
      if (searchList[middle] > value) {
        right = middle - 1;
        middle = left + Math.floor((right - left) / 2);
      } else {
        left = middle + 1;
        middle = left + Math.floor((right - left) / 2);
      }
  
      //if found update output array and exit
      if (searchList[middle] == value) {
        arrayPath.push(searchList[middle]);
  
        break;
      }
    }
    return arrayPath;
  };


  function binarySearch(searchList, value, left=0, right=searchList.length-1, path=[]) {
    let mid = Math.floor((left+right)/2);
    path.push(searchList[mid]);
    if(searchList[mid] == value){
      return path;
    }
    if(left>=right){
      return "Value Not Found";
    }
    if(searchList[mid] > value){
      return binarySearch(searchList, value, left, mid-1, path);
    }
    return binarySearch(searchList, value, mid+1, right, path);
  }
  