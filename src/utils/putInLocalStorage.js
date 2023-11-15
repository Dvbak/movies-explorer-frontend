function putInLocalStorage(...item) {
  console.log(item);
  for (let i = 0; i < item.length; i++) {
    localStorage.setItem(`key_${[i+1]}`, JSON.stringify(item[i]));
  }
}

function takeFromLocalStorage() {
  const valuesLocStor = Object.values(localStorage).reverse();
  let arrValues = [];
  for (let i = 1; i <= (valuesLocStor.length - 1); i++) {
    arrValues.push(JSON.parse(valuesLocStor[i]));
  }
  console.log(arrValues);
  return arrValues;
}

export  { putInLocalStorage, takeFromLocalStorage };
