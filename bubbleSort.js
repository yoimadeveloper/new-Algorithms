function swap(a, b, arr) {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; i++) {
            if (array[j] > array[j+1]) {
                swap(j, j+1, array);
            }
        }
    }
    return array;
}

function bubbleiSort(b, c, array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - 1 - j; j++) {
            if (array[j] > array[j + 1])
            [array[j], array[j+1]] = [array[j+1], array[j]];
        }
    }
    return array;
}