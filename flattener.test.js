const flattener = require("./flattener")

var example = {
    "a": 1,
    "b": true,
    "c": {
        "d": 3,
        "e": "test"
    }
}
var exampleFlattened = { "a" : 1, "b": true, "c.d": 3, "c.e": 'test' }

test('example version', ()=>{
    expect(flattener(example)).toStrictEqual(exampleFlattened)
})

