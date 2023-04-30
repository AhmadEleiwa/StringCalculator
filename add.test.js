const { describe } = require('node:test')
const {add} = require('./add')


describe("Testing Add function", ()=>{
    test('1 + 4 ', ()=>{
        expect(add('1+4')).toBe(5)
    })


})