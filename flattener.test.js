const flattener = require("./flattener");
const { JSON1, JSON1Flattened, JSON2, JSON2Flattened, JSON3, JSON3Flattened, JSON4, JSON4Flattened, JSON5, JSON5Flattened } = require("./testCases");

//Test 1 
test('Test 1', () => {
    expect(flattener(JSON1)).toStrictEqual(JSON1Flattened)
})

//Test 2
test('Test 2', () => {
    expect(flattener(JSON2)).toStrictEqual(JSON2Flattened)
})

//Test 3
test('Test 3', () => {
    expect(flattener(JSON3)).toStrictEqual(JSON3Flattened)
})

//Test 4
test('Test 4', () => {
    expect(flattener(JSON4)).toStrictEqual(JSON4Flattened)
})

//Test 5
test('Test 5', () => {
    expect(flattener(JSON5)).toStrictEqual(JSON5Flattened)
})
