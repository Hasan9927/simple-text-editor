function cubeNumber(number) {
  if (typeof number === 'number') {
    let result = Math.pow(number, 3);
    return result;
  } else {
    let result = "You didn't enter a number";
    return result;
  }
}
const number = cubeNumber(2);
console.log(number);

function matchFinder(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return 'Please Enter string !';
  } else {
    const similar = string1.includes(string2);
    return similar;
  }
}

function sortMaker(arr) {
  if (arr.length !== 2) {
    return 'Invalid';
  } else if (arr[0] < 0 || arr[1] < 0) {
    return 'Invalid';
  } else if (arr[0] === arr[1]) {
    return 'equal';
  } else if (arr[0] > 0 && arr[0] > 0) {
    return arr[0] > arr[1] ? [arr[0], arr[1]] : [arr[1], arr[0]];
  }
}

function findAddress(obj) {
  if (typeof obj !== 'object') {
    return 'Enter valid Object';
  } else {
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';
    return street + ',' + house + ', ' + society;
  }
}

function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return 'Please Enter an Array!';
  } else {
    const totalPrice = changeArray[0] + changeArray[1] + changeArray[2];
    if (totalPrice === totalDue || totalPrice > totalDue) {
      return true;
    } else {
      return false;
    }
  }
  return canPay;
}
