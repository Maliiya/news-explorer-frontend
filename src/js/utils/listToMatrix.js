export function listToMatrix(list, elementsPerSubArray) {
  console.log(list)
 let matrix = [], i , k ;
  matrix.splice(0, 1000);

  for (i = 0, k = -1; i < list.length; i++) {
      if (i % elementsPerSubArray === 0) {
          k++;
          matrix[k] = [];
      }
      matrix[k].push(list[i]);
  }
  return matrix;
}