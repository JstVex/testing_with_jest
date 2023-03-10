import reverseString from "./reverseString";

test('"Hello" should become "olleH"', () => {
    expect(reverseString('Hello')).toBe('olleH');
})

test('5 should output "not a string"', () => {
    expect(reverseString(5)).toBe('not a string');
})

test('"12345" should output "54321"', () => {
    expect(reverseString('12345')).toBe('54321');
})