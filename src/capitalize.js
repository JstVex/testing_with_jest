const capitalize = (string) => {
    const capatilizedFirstLetter = string.charAt(0).toUpperCase();
    const remainingString = string.slice(1);
    const capatilizedString = capatilizedFirstLetter + remainingString;
    if (string.charAt(0) == capatilizedFirstLetter) return string;
    if (string.charAt(0) !== capatilizedFirstLetter) return capatilizedString;
    return 'not a valid character';
}

export default capitalize;