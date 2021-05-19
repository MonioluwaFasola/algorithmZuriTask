const convertFahrToCelsius = (fahr) => {
  if (Array.isArray(fahr)) {
    return `[${fahr}] is not a valid number but a/an array`;
  } else if (toString.call(fahr) === "[object Object]") {
    for (const [key, value] of Object.entries(fahr)) {
      return `{${key}: ${value}} is not a valid number but a/an object`;
    }
  } else if (Number(fahr) || fahr == 0){
    const result = ((fahr - 32) * 5) / 9;
    return result.toFixed(4);
  } else if (typeof fahr === "string") {
    return `${fahr} is not a valid number but a/an string`;
  } 
};

console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius("20"));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({temp: 0}));








function checkYuGiOh(n) {
  let arr = [];
  if (!Number(n)) {
    return `Invalid parameter: ${n}`;
  }
  for (let i = 1; i <= n; i++) {
    if (i % 30 === 0) {
      arr.push("yu-gi-oh");
    } else if (i % 10 === 0) {
      arr.push("yu-oh");
    } else if (i % 6 === 0) {
      arr.push("yu-oh");
    } else if (i % 15 === 0) {
      arr.push("yu-oh");
    } else if (i % 2 === 0) {
      arr.push("yu");
    } else if (i % 3 === 0) {
      arr.push("gi");
    } else if (i % 5 === 0) {
      arr.push("oh");
    } else {
      arr.push(i);
    }
  }

  return arr;
}

console.log(checkYuGiOh(10));
console.log(checkYuGiOh("5"));
console.log(checkYuGiOh("fizzbuzz is meh"));





