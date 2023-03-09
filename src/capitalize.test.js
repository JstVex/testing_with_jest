import capitalize from "./capitalize";

test('"test" should become "Test"', () => {
    expect(capitalize('test')).toBe('Test');
});

test('"Hello" should become "Hello"', () => {
    expect(capitalize('Hello')).toBe('Hello');
})

test('"three word test" should become "Three word test"', () => {
    expect(capitalize('three word test')).toBe('Three word test');
});

test('"12@#abcd@#34" should become "12@#Abcd@#34"', () => {
    expect(capitalize('12@#abcd@#34')).toBe('12@#Abcd@#34');
});

test('"12@#abcd@#34" should become "12@#Abcd@#34"', () => {
    expect(capitalize('12@#abcd@#34')).toBe('12@#abcd@#34');
});

test('"1234" should become "not a valid character"', () => {
    expect(capitalize('1234')).toBe('not a valid character');
});

test('"@#$" should become "not a valid character"', () => {
    expect(capitalize('@#$')).toBe('not a valid character');
});