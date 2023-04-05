import { sayHello } from "./unit1";

describe('SayHello Unit Test Suites', () => {
    it('should return "Hello, World"', () => {
        expect(sayHello()).toBe("Hello, World")
    })
    it('should return "Hello, Pierre"', ()=>{
        expect(sayHello("Pierre")).not.toBe("Hello, pierre")
    })

})