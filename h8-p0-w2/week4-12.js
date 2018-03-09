var shoppingObj = {
  memberID: 'a',
  money: 0,
  listPurchased: [],
  changeMoney: 0
}

function shoppingTime(memberId, money) {
  if (memberId === '' || (memberId === undefined && money === undefined)) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  } else if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  } else {
    shoppingObj.memberID = memberId;
    shoppingObj.money = money;
    var Purchase = true;
    while (money > 0 && Purchase) {
      if (money >= 1500000) {
        shoppingObj.listPurchased.push('Sepatu Stacattu');
        money -= 1500000;
        Purchase = true;
      }
      if (money >= 500000) {
        shoppingObj.listPurchased.push('Baju Zoro');
        money -= 500000;
        Purchase = true;
      }
      if (money >= 250000) {
        shoppingObj.listPurchased.push('Baju H&N');
        money -= 250000;
        Purchase = true;
      }
      if (money >= 175000) {
        shoppingObj.listPurchased.push('Sweater Uniklooh');
        money -= 175000;
        Purchase = true;
      }
      if (money >= 50000) {
        shoppingObj.listPurchased.push('Casing Handphone');
        money -= 50000;
        Purchase = true;
      }
      Purchase = false;
    }
    shoppingObj.changeMoney = money;
    return shoppingObj;
  }
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
