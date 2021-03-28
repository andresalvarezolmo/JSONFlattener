# JSONFlattener

JSONFlattener is a JavaScript utility that takes a JSON object as input and outputs a flattened version of the JSON object, with keys as the path to every terminal value in the JSON structure. The flattened result is printed on terminal

###How does the program work?
The program takes a JSON as input and iterates through it until it finds another object (in case that field does not contain an object this is copied to the final object), with a recursive call we now use the subBranch as input for the program. When the program has checked every possible subBranch, then we iterate through the returned result from the recursive calls and append it to our final object. 

## Requirements to run the program:
- Have node.js installed on your PC, to check it type on your terminal  "node -v". If you do not have it you can download it from: https://nodejs.org/en/download/
- Use a linux based terminal

If it is the first time you run this program then navigate to the repository directory and execute this command to install the needed npm packages:
```console
npm install
```

## How to run the program?
To run the program execute this line on a linux based terminal (if you want to modify the input you can do it by changing the content of test.json):
```console
cat test.json | node main.js
```

## How to run the provided tests?
To run the provided tests on flattener.test.js run:
```console
npm run test
```
