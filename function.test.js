const { returnTwo, greeting, add, multiply, divide, subtract} = require("./function")

test("Should return the number 2", () => {
    expect(returnTwo()).toEqual(2)
})

it("Should return the greeting hello name", () => {
    expect(greeting("John")).toEqual(`Hello John`)
})

describe("Math", () => {

    test("Should return the math of the numbers", () => {
        expect(add(5, 6)).toEqual(11)
        expect(multiply(5, 6)).toEqual(30)
        expect(divide(10, 5)).toEqual(2)
        expect(subtract(6, 4)).toEqual(2)
    })

})