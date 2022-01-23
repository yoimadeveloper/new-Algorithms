function updateInventory(arr1, arr2) {
    var index;
    var inevArr = [];
    var updateInvArr = [];

    arr1.forEach((item1)=> {
        arr2.forEach((item2)=> {
            if (item1[1] === item2[1]) {
                item1[0] = item1[0] + item2[0]
            }
        })
    });

    arr1.forEach((item) => {
        inevArr.push(item[1])
    })

    arr2.forEach((item)=> {
        updateInvArr.push(item[1])
    })

    inevArr.forEach((item) => {
        if (updateInvArr.indexOf(item) === -1) {
            index = updateInvArr.indexOf(item);
            inevArr.push([index]);
        }
    })
    arr1.sort(function(curritem, nextItem) {
        return curritem[1] > nextItem[1] ? 1 : -1
    });

    console.log(arr1)
    return arr1;

}
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])





function meriInventory(arr1, arr2) {
    var index; 
    var getProductIndex = function(name) {
        for (var i = 0; i < this.length; i++) {
            if (this[i][1] === name){
                return i;
            }
        };
        return undefined;
    }
    for (var i = 0; i < arr2.length; i++){
        index = getProductIndex.call(arr1, arr2[i][1])
        if (index === undefined) {
            arr1.push(arr2[i])
        } else {
            arr1[index][0] += arr2[i][0]
        }
    }
    console.log(arr1)
    arr1.sort(function(a, b) {
        if (a[1] < b[1]) {
            return 1;
        }
        if (a[1] > b[1]) {
            return -1;
        }
        return 0;
    });
    return -1;

}


meriInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  
    // convert current inventory (arr1) to an one-dimensional array
    const inventory = Array.prototype.concat.apply([], arr1);
  
    // loop through new delivery (arr2)
    for (let i = 0; i < arr2.length; i++) {
      // extract item properties for easy reference
      const item = arr2[i][1];
      const quantity = arr2[i][0];
  
      // check if item already exists in inventory
      const position = inventory.indexOf(item);
  
      // exsisting item: update quantity
      if (position !== -1) {
        const row = Math.floor(position / 2);
        arr1[row][0] += quantity;
        continue;
      }
  
      // alien item: add to inventory
      arr1.push([quantity, item]);
    }
  
    // sort inventory in alphabetical order
    arr1.sort((previous, next) => (previous[1] > [next[1]] ? 1 : -1));
  
    return arr1;
  }