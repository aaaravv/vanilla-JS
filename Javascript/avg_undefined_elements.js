var grades= [2, 5, , , 9, 8, , 8];
var sum = 0;
var count = 0;
// checking the size of the array grades before calculating sum
if (grades.length > 0){
  for (index = 0; index < grades.length; index++){
    // calculatin sum for only defined elements
    if (grades[index] != undefined){
		  sum += grades[index]; 
      count = count + 1;
    }
  }
  //dividing with the count bcz , dividing with length of array will be useless when array have empty indexes
  // document.write(sum/grades.length);
  document.write(sum/count);
}
else
  document.write("Empty Array");
