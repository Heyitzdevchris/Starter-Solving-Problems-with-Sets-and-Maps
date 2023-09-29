/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
    // Create an empty map to store the results
    const results = new Map();
    
    // Iterate through each word in the input 'words' array
    words.forEach((word) => {
        let distinctLetters = Array.from(new Set(word.split("")))
            .sort()
            .join("");
        if(results.has(distinctLetters)) {
            results.get(distinctLetters).push(word);
        }
        else {
            results.set(distinctLetters, [word]);
        }
    });
    return results;
}

module.exports = sameLetters;
