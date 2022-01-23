function pairwise(arr, arg) {
    let pairIndicies = []
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg && !pairIndicies.includes(i)
            && !pairIndicies.includes(j)
            ) {
                pairIndicies.push(i, j);
                break;
            }
        }
    }
    
return console.log(pairIndicies.reduce((sum, curr, index) => sum + curr , 0)); 
    }

    pairwise([1,4,2,3,0,5], 7);