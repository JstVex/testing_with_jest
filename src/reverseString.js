function reverseString(str) {
    if (typeof str === 'string') {
        return str.split("").reverse().join("");
    }
    return "not a string"
}

export default reverseString;