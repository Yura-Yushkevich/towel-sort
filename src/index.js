'use strict';
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let matrixArr = [];
  
  if (typeof(matrix)=='object' && matrix.length>0){
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
  }
  return matrixArr;
};