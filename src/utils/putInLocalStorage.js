function putInLocalStorage(...item) {
  console.log(item);
  for (let i = 0; i < item.length; i++) {
    localStorage.setItem(`key_${[i+1]}`, JSON.stringify(item[i]));
  }
}

export default putInLocalStorage;
