'use strict';

function towelSort(matrix){
  let matrixArr = [];
  
  for(let i=0; i<matrix.length;i++){
    if (i%2 == 0){
        for(let k=0; k<matrix[i].length;k++){
            matrixArr.push(matrix[i][k]);
        }
    }else{
        for(let k=matrix[i].length-1; k>=0;k--){
            matrixArr.push(matrix[i][k]);
        }
    }
  }
  console.log(matrixArr);
}






towelSort(
    [
        [1, 2],
        [3, 4],
    ]
 );