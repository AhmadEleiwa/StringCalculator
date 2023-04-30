const { describe } = require('node:test')
const {add} = require('./add')


describe("Testing Add function", ()=>{
    test('1 + 4 ', ()=>{
        expect(add('1+4')).toBe(5)
    })
    test('1 + 9 ', ()=>{
        expect(add('1+9')).toBe(10)
    })


    test('1 + 1001 ', ()=>{
        expect(add('1+1001')).toBe(1)
    })
    test('1 + -50 ', ()=>{
        expect(add('1 + -50'))
    })
})