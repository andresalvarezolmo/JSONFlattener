'use strict'

//function that takes a JSON which could be nested and returns a flattened version
function flattener(input){
  //create an object to store the final flattened version
  var finalJSON = {}
  //iterate through the input JSON, keeping track of current field with i variable
  for (var i in input){      
      //check current node is an object, hence contains atleast one subBranch
      if(typeof input[i] === 'object'){
          //store the returned result from the recursive call inside a variable 
          var subBranch = flattener(input[i])
          //iterate through the result of the recursive call, keeping track of current field with j variable
          for(var j in subBranch){
              //append field with its corresponding key to the final JSON
              finalJSON[i + '.' + j] = subBranch[j]
          }
      }
      //in case i is not an object store it directly into the final result object
      else{
          finalJSON[i] = input[i]
      }
  }
  return finalJSON
}

module.exports = flattener;