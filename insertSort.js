function insertionSort(array) {
    for (var i = 1; i < array.length; i++) {
        let curr = array[i];
        for (var j = i - 1; j >= 0 && array[j] > curr; j--) {
            array[j+1] = array[j];
            //console.log(array[j+1])
        }
        array[j+1] = curr
    }
    console.log(array)
    return array;
}

insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])