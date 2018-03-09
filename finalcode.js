function initialGroupingDescending(studentsArr) {
let duplicate = studentsArr.slice(0)
  let initial = []
  for (let i = 0; i < duplicate.length; i++) {
    for (let j = 0; j < duplicate.length; j++) {
      if (i !== j) {
        if (duplicate[i][0] === duplicate[j][0]) {
          duplicate[j] = ''
        }
      }
    }
    if (duplicate[i] !== '') {
      initial.push([duplicate[i][0]])
    }
  }
  for (let i = 0; i < studentsArr.length; i++) {
    for (let j = 0; j < initial.length; j++) {
      if (initial[j][0] === studentsArr[i][0]) {
        initial[j].push(studentsArr[i])
      }
    }
  }
  return initial
}


console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/
