/*
Multi line Comment
*/

//Single Line Comment

function Missingno(numbers){
   var missing = -1;
   var sorted = numbers.sort(function(a,b){return a-b;})

   for(var i = sorted[0] ;i <= numbers.length-1; i++){
      if (numbers.indexOf(i) === -1){
         missing = i;
      }
   }
   return missing;
}


var numbers = [3, 8, 7, 9, 6, 4, 0, 1 ,12, 5, 14,2, 19, 16, 18, 11, 10, 13, 17,20];

console.log(Missingno(numbers));