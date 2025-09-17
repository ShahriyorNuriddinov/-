function eng(number) {
  let min = number[0];
  let max = number[0];

  for (let i = 1; i < number.length; i++) {
    if (number[i] <= min) {
      min = number[i];
    } else if (number[i] >= max) {
      max = number[i];
    }
  }
  console.log("Eng kichik: ", min);
  console.log("Eng katta: ", max);
}
let sonlar = [10, 3, 25, -7, 15];
eng(sonlar);

function tub(n) {
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      console.log("Tub son emas ");
    } else if (n % i === 1) {
      console.log("Tub son ");
    }
  }
}
let son = [10];
tub(son);

function raqam(n) {
  let num = 0;
  for (let i = 0; i < [n].length; i++) {
    num += length[i];
  }
  return num;
}
console.log(raqam(8908786));

function teskariSon(n) {
  let teskari = "";
  for (let i = [n].length - 1; i >= 0; i--) {
    teskari += teskari[i];
  }
  return teskari;
}
console.log(teskariSon(123));
