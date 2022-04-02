const array = [2, 4, 7, 5, 4, 3, 8];

const result=array.filter(function (item, index, array) {
  return array.indexOf(item) === index;
});

console.log(result);


function leapyear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}


const checkyear = ["2020", "2021"];

for (let i = 0; i < checkyear.length ; i++) {
  const number = checkyear[i];


  if (leapyear(number)) {
    console.log(number + '年はうるう年です');
  } else {
    console.log(number + '年はうるう年ではありません');
  }
}