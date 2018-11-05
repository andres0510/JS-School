/**
 * @param {array} array arrayList to be reversed
 * @return {array}
 */
function reverse(array) {
  const arrayR = array;
  let i;
  let j;
  let aux;
  j = arrayR.length - 1;
  for (i = 0; i < arrayR.length / 2; i += 1) {
    aux = arrayR[i];
    arrayR[i] = array[j];
    arrayR[j] = aux;
    j -= 1;
  }
  return arrayR;
}

const myArray = ['school', 'js', 'the', 'is', 'this'];
const reversed = reverse(myArray);
console.log(reversed);