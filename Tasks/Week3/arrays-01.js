/**
 * @param {array} array arrayList to sort
 * @return {array}
 */
function bubbleSort(array) {
  const arrayS = array;
  let i;
  let j;
  let aux;
  for (i = 0; i < arrayS.length; i += 1) {
    for (j = 0; j < arrayS.length - i - 1; j += 1) {
      if (arrayS[j] > arrayS[j + 1]) {
        aux = array[j];
        arrayS[j] = array[j + 1];
        arrayS[j + 1] = aux;
      }
    }
  }
  return array;
}

const myArray = [1, 7, 0, 34, 23, 5, 2];
const sorted = bubbleSort(myArray);
console.log(sorted);