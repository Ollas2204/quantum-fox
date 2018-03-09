function groupAnimals(animals) {
  // you can only write your code here!
  var result = []
    var hit = []
    var sortAnimals = animals.sort()
    for (var i = 0; i < animals.length; i++) {
      hit.push(animals[i])
      if (i !== animals.length - 1) {
        if (animals[i][0] !== (animals[i+1][0])) {
          result.push(hit)
          hit = []
        }
      }
      else {
        result.push(hit)
        hit = []
      }
    }
    return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
