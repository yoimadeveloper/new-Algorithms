function swap(a, b, arr) {
  let tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    // let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
    
    swap(i, j, array);
      }
    }
  }
  console.log(array);
  return array;
}

selectionSort([1,4,2,8,345,123,43,32,5643,63,123,12,0,55,1,234,92])