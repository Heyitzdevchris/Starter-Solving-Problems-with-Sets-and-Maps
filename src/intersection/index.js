function intersection(a, b) {
    // Initialize a new Map.
    const elementMap = new Map();

    // Initialize a new Set.
    const commonElements = new Set();

    // Add elements of array 'a' to the Map.
    for (const e of a) {
        //add e to the Map.
        elementMap.set(e, true);
    }

    // Iterate over elements of array 'b'.
    for ( const e of b) {
        // Look up element 'e' in the Map.
        if (elementMap.has(e)) {
        // If 'e' is in the Map, add it to the Set.
        commonElements.add(e);
        }
    }

    // Convert the Set to array and return.
    return Array.from(commonElements);
}

module.exports = intersection;
