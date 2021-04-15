var input = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
   ];


var ouput = [1,2,4,3,5,7,6,8,9];

var findDiagonalOrder = function(matrix) {


  for(let i=0; i<matrix.length;i++) {

    for(let j = 0; j< matrix[i].length;j++) {
        console.log(matrix[i][j] + "\t ");
    }
    console.log("\n")

  }
    
}
findDiagonalOrder(input)